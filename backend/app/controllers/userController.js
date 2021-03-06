const mongoose = require('mongoose');
const User = require('../models/User.js');

const { ErrorHandler } = require('../modules/error');
const jwt = require('jsonwebtoken');
/*
 * Errors:
 * unf-user not found: unf
 * wrong password: pnm
 * email or password not provided in req.body: mcp
 */

class UserCtrl {
	static async uniqueIdAndEmail(req, res, next) {
		try {
			const { tzId, email } = req.params;

			const applicantID = await User.findOne({ iic: tzId }).exec();

			if (isNaN(Number(tzId))) {
				throw new ErrorHandler(400, 'Invalid Id');
			}

			let outPutResponse = {
				message: '',
				canUseTzId: false,
				canUseEmail: false,
			};

			if (applicantID) {
				outPutResponse.message += 'id already in use';
			} else {
				outPutResponse.canUseTzId = true;
			}

			const applicantEmail = await User.findOne({ email: email }).exec();

			if (applicantEmail) {
				outPutResponse.message += 'email already in use';
			} else {
				outPutResponse.canUseEmail = true;
			}

			return res.status(200).json(outPutResponse);
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async login(req, res, next) {
		try {
			const { email, password } = req.body;

			// fetch user and test password verification
			const user = await User.findOne({ email: email }, function(err, user) {
				if (err) {
					throw new ErrorHandler(500, err.message);
				}
			}).exec();

			if (!user) {
				throw new ErrorHandler(401, 'Auth Failed:code unf');
			}

			//test password
			return await user.comparePassword(password, function(err, isMatch) {
				if (err) throw err;
				if (!isMatch) {
					res.status(400).json({ message: 'Auth Failed:code pnm' });
				} else {
					const token = jwt.sign({ email: email, userId: user._id }, process.env.SECRET_KEY, {
						expiresIn: '1h',
					});

					const outputUser = user;
					outputUser.id = outputUser._id;
					delete outputUser._id;

					const outPutResponse = {
						message: 'User Found',
						token: token,
						expiresIn: 3600,
						user: outputUser,
					};
					res.status(200).json(outPutResponse);
				}
			});
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async signup(req, res, next) {
		try {
			let { password, email, city, iic, street, firstName, lastName } = req.body;

			const user = new User({
				email: email,
				password: password,
				city: city,
				street: street,
				iic: iic,
				firstName: firstName,
				lastName: lastName,
			});

			const createdUser = await user.save();
			res.status(201).json({
				message: 'User Added to db',
				result: createdUser,
			});
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async isAdmin(req, res, next) {
		try {
			const { id } = req.params;
			console.log('TCL: isAdmin -> id', id);

			// fetch user and test password verification
			const responseUser = await User.findById(id)
				.lean()
				.exec();

			const isAdmin = responseUser.isAdmin;

			return res.status(200).json({ isAdmin: isAdmin || false });
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}
}

module.exports = UserCtrl;
