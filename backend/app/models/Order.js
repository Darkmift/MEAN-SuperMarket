const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const User = require('./User');
const Cart = require('./Cart');
const refIsValid = require('../middleware/refIsValid');

const orderSchema = new Schema({
	name: { type: String, default: Date.now(), unique: true },
	customerRef: { type: Schema.Types.ObjectId, required: true },
	cartRef: { type: Schema.Types.ObjectId, ref: 'Cart', required: true },
	total: { type: Number, default: 0 },
	city: { type: String, required: true },
	street: { type: String, required: true },
	deliveryDate: { type: Date, required: true },
	dateCreated: { type: Date, default: Date.now() },
	ccLastDigits: { type: String, required: true },
});

orderSchema.path('customerRef').validate((value, respond) => {
	return refIsValid(value, respond, User);
}, 'Invalid customerRef.');

orderSchema.path('cartRef').validate((value, respond) => {
	return refIsValid(value, respond, Cart);
}, 'Invalid cartRef.');

orderSchema.path('ccLastDigits').validate(function(field) {
	return field && field.length === 4;
}, 'Invalid ccLastDigits: must be 4 characters');

orderSchema.plugin(uniqueValidator);

module.exports = mongoose.model('order', orderSchema);
