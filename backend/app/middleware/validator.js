const { body, validationResult, param } = require('express-validator');
const { ErrorHandler } = require('../modules/error');

const isValidDate = value => {
	return !isNaN(Date.parse(value));
};

const validationSets = {
	idExists: [
		param('tzId')
			.isNumeric()
			.withMessage('must be digits only')
			.isLength({ min: 9, max: 9 })
			.withMessage('must be at least 9 digits long')
			.not()
			.isEmpty(),
	],
	login: [
		// email must be an email
		body('email')
			.normalizeEmail()
			.isEmail(),
		// password must not be empty
		body('password')
			.not()
			.isEmpty(),
	],
	signup: [
		// email must be an email
		body('email')
			.normalizeEmail()
			.isEmail()
			.withMessage('must be a valid email'),
		// password must not be empty
		body('password')
			.not()
			.isEmpty(),
		body('firstName')
			.not()
			.isEmpty(),
		body('lastName')
			.not()
			.isEmpty(),
		body('iic')
			.isNumeric()
			.withMessage('must be digits only')
			.isLength({ min: 9, max: 9 })
			.withMessage('must be at least 9 digits long')
			.not()
			.isEmpty(),
		body('city')
			.not()
			.isEmpty(),
		body('street')
			.not()
			.isEmpty(),
	],
	categoryName: [
		body('name')
			.not()
			.isEmpty(),
	],
	categoryId: [
		param('id')
			.not()
			.isEmpty(),
	],
	productCreate: [
		body('name')
			.not()
			.isEmpty(),
		body('price')
			.isNumeric()
			.not()
			.isEmpty(),
		body('categoryId')
			.not()
			.isEmpty(),
		body('amount')
			.isNumeric()
			.not()
			.isEmpty(),
	],
	productEdit: [
		body('name')
			.not()
			.isEmpty(),
		body('price')
			.isNumeric()
			.not()
			.isEmpty(),
		body('categoryId')
			.not()
			.isEmpty(),
		body('amount')
			.isNumeric()
			.not()
			.isEmpty(),
		body('_id')
			.not()
			.isEmpty(),
	],
	productId: [
		param('id')
			.not()
			.isEmpty(),
	],
	cartCreate: [
		body('name')
			.not()
			.isEmpty(),
		body('customerRef')
			.not()
			.isEmpty(),
	],
	carts: [
		body('customerRef')
			.not()
			.isEmpty(),
	],
	cartId: [
		body('customerRef')
			.not()
			.isEmpty(),
		body('_id')
			.not()
			.isEmpty(),
	],
	orderCreate: [
		body('customerRef')
			.not()
			.isEmpty(),
		body('name')
			.not()
			.isEmpty(),
		body('cartRef')
			.not()
			.isEmpty(),
		body('total')
			.isNumeric()
			.not()
			.isEmpty(),
		body('city')
			.not()
			.isEmpty(),
		body('street')
			.not()
			.isEmpty(),
		body('deliveryDate')
			.custom(isValidDate)
			.withMessage('the date must be valid')
			.not()
			.isEmpty(),
		body('ccLastDigits')
			.isNumeric()
			.isLength({ min: 4, max: 4 })
			.not()
			.isEmpty(),
	],
	orders: [
		body('customerRef')
			.not()
			.isEmpty(),
	],
	orderId: [
		body('customerRef')
			.not()
			.isEmpty(),
		body('_id')
			.not()
			.isEmpty(),
	],
};

const validationRules = arg => {
	return validationSets[arg];
};

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	const extractedErrors = [];
	errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
	extractedErrors.push({ message: 'Pratial/Invalid Credentials' });
	throw new ErrorHandler(422, extractedErrors);
};

module.exports = {
	validationRules,
	validate,
};
