const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Category = require('./Category');
const refIsValid = require('../middleware/refIsValid');

const productSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
	price: { type: Number, required: true },
	imgUrl: { type: String, required: true },
	amount: { type: Number, default: 0 },
});

productSchema.path('category').validate((value, respond) => {
	return refIsValid(value, respond, Category);
}, 'Invalid category ref.');

productSchema.path('price').get(function(num) {
	return num.toFixed(2);
});

productSchema.plugin(uniqueValidator);

module.exports = mongoose.model('product', productSchema);
