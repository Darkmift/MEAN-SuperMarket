const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	isAdmin: { type: Boolean, default: false },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	city: { type: String, required: true },
	iic: { type: String, required: true },
	street: { type: String, required: true },
});

userSchema.path('iic').validate(function(field) {
	return field && field.length === 9;
}, 'Invalid iic code: must be 9 characters');

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
