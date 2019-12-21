const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const User = require('./User');
const refIsValid = require('../middleware/refIsValid');

const cartSchema = new Schema({
	name: { type: String, required: true, unique: true, default: Date.now() },
	customerRef: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	dateCreated: { type: Date, default: Date.now() },
	dateEdited: { type: Date, default: Date.now() },
});

cartSchema.path('customerRef').validate((value, respond) => {
	return refIsValid(value, respond, User);
}, 'Invalid customerRef.');

cartSchema.plugin(uniqueValidator);

module.exports = mongoose.model('cart', cartSchema , 'carts');
