const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
bcrypt = require('bcryptjs');
SALT_WORK_FACTOR = 10;

const userSchema = mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	isAdmin: { type: Boolean, default: false },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	city: { type: String, required: true },
	iic: { type: String, required: true, unique: true },
	street: { type: String, required: true },
});

//validate iic is 9 chars long
userSchema.path('iic').validate(function(field) {
	return field && field.length === 9;
}, 'Invalid iic code: must be 9 characters');

userSchema.pre('save', function(next) {
	var user = this;

	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();

	// generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);

		// hash the password using our new salt
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) return next(err);

			// override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
