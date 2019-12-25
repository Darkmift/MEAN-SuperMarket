const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Product = require('./Product');
const Cart = require('./Cart');
const refIsValid = require('../middleware/refIsValid');

const cartItemSchema = mongoose.Schema({
	name: { type: String },
	productRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
	cartRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true },
	price: { type: Number },
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
	var self = this;

	const refCart = await Cart.findById(self.cartRef).lean().exec();
	const refProduct = await Product.findById(self.productRef).lean().exec();
	const uniqueName = `${refProduct._id}_${refCart._id}`;

	self.name = refProduct.name;
	self.price = refProduct.price;
	self.imgUrl = refProduct.imgUrl;
	self.total = (self.price * self.amount).toFixed(2);
	console.log('TCL: 	self.total ', self.total);
	self.uniqueName = uniqueName;
	next();
});

cartItemSchema.pre('findOneAndUpdate', async function() {
	const docToUpdate = await this.model.findOne(this.getQuery());
	const refProduct = await Product.findById(docToUpdate.productRef).lean().exec();
	docToUpdate.total = (refProduct.price * docToUpdate.amount).toFixed(2);
	console.log('TCL: docToUpdate.total', docToUpdate.total);
	await docToUpdate.save();
  console.log('TCL: docToUpdate', docToUpdate);
});

cartItemSchema.plugin(uniqueValidator);

module.exports = mongoose.model('cartItem', cartItemSchema);
