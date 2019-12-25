const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Product = require('./Product');
const Cart = require('./Cart');
const refIsValid = require('../middleware/refIsValid');

const cartItemSchema = mongoose.Schema({
	name: { type: String },
	productRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
	cartRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true },
	price: { type: Number, default: 0 },
	imgUrl: { type: String },
	amount: { type: Number, required: true },
	total: { type: Number, default: 0 },
	active: { type: Boolean, default: true },
	uniqueName: { type: String, unique: true },
});

cartItemSchema.path('productRef').validate((value, respond) => {
	return refIsValid(value, respond, Product);
}, 'Invalid product ref.');

cartItemSchema.path('cartRef').validate((value, respond) => {
	return refIsValid(value, respond, Cart);
}, 'Invalid cart ref.');

cartItemSchema.path('price').get(function(num) {
	return num.toFixed(2);
});

cartItemSchema.pre('save', async function(next) {
	const refCart = await Cart.findById(this.cartRef).lean().exec();
	const refProduct = await Product.findById(this.productRef).lean().exec();
	const uniqueName = `${refProduct._id}_${refCart._id}`;

	this.name = refProduct.name;
	this.price = refProduct.price;
	this.imgUrl = refProduct.imgUrl;
	this.total = (this.price * this.amount).toFixed(2);
	this.uniqueName = uniqueName;
	next();
});

cartItemSchema.post('findOneAndUpdate', function(result) {
	var self = this;
	try {
		const resultobj = result.save(function(err, doc) {
			if (err) {
				console.error('ERROR!');
			}
			// self.options.result = doc._doc;
			// console.log('TCL: 	self.options.result', self.options.result);

			// console.log('TCL: docToUpdate', result);
			// self.options.res.json({ message: result._doc });
			// self.options.res.end();
		});
	} catch (error) {
		console.error('ERROR:', error);
	}
});

cartItemSchema.plugin(uniqueValidator);

module.exports = mongoose.model('cartItem', cartItemSchema);
