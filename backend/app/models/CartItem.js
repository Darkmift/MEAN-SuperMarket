const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Product = require('./Product');
const Cart = require('./Cart');
const refIsValid = require('../middleware/refIsValid');

const cartItemSchema = mongoose.Schema({
	name: { type: String, required: true },
	productRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
	cartRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true },
	price: { type: Number, required: true },
	imgUrl: { type: String, required: true },
	amount: { type: Number, required: true },
	price: { type: Number, required: true },
	total: { type: Number, default: 0 },
	active: { type: Boolean, default: true },
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

cartItemSchema.pre('save', function(next) {
	this.total = this.price * this.amount;
	this.total = this.total.toFixed(2);
	next();
});

cartItemSchema.pre('save', function(next) {
	var self = this;

	model.findById(self.productRef, function(err, results) {
		if (err) {
			next(err);
		} else if (results) {
			console.warn('results', results);
			self.invalidate('await final script');
			next(new Error('await final script error'));
		} else {
			next();
		}
	});
});

cartItemSchema.plugin(uniqueValidator);

module.exports = mongoose.model('cartItem', cartItemSchema);
