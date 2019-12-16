var User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const { ErrorHandler } = require('../modules/error');
const jwt = require('jsonwebtoken');
/*
* Errors:
* unf-user not found: unf
* wrong password: pnm
* email or password not provided in req.body: mcp
*/

class UserCtrl {
	static async idExists(req, res, next) {
		try {
			const { tzId } = req.params;

			const applicant = await User.findOne({ iic: tzId }).exec();
			console.log('TCL: UserCtrl -> idExists -> applicant', applicant);
			console.log('TCL: UserCtrl -> idExists -> isNaN(parseInt(tzId)', isNaN(parseInt(tzId)));

			if (isNaN(Number(tzId))) {
				throw new ErrorHandler(400, 'Invalid Id');
			}

			let outPutResponse;
			if (applicant) {
				outPutResponse = {
					message: 'id already in use',
					canUseTzId: false,
				};
			} else {
				outPutResponse = {
					message: 'id not in use',
					canUseTzId: true,
				};
			}

			return res.status(200).json(outPutResponse);
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async login(req, res, next) {
		try {
			const email = req.body.email;
			const password = req.body.password;

			const user = await User.findOne({ email: email }).exec();

			if (!user) {
				throw new ErrorHandler(401, 'Auth Failed:code unf');
			}

			const passworcCompareResult = await bcrypt.compare(password, user.password);
			if (!passworcCompareResult) {
				throw new ErrorHandler(401, 'Auth Failed:code pnm');
			}
			const token = jwt.sign({ email: email, userId: user._id }, process.env.SECRET_KEY, {
				expiresIn: '1h',
			});

			const outPutResponse = {
				message: 'User Found',
				token: token,
				expiresIn: 3600,
				user: user,
			};

			res.status(200).json(outPutResponse);
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async signup(req, res, next) {
		try {
			let { password, email, city, iic, street, firstName, lastName } = req.body;

			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);

			const user = new User({
				email: email,
				password: hashedPassword,
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
}

module.exports = UserCtrl;
