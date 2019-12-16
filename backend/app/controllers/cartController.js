var Cart = require('../models/Cart');

class CartController {
	static async create(req, res, next) {
		try {
			let { name, customerRef } = req.body;

			const newCart = new Cart({
				name: name,
				customerRef: customerRef,
			});

			const createdCart = await newCart.save();
			res.status(201).json({
				message: 'Cart Added to db',
				result: createdCart,
			});
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async getAll(req, res, next) {
		const { customerRef } = req.body;
		try {
			const CartList = await Cart.find({ customerRef: customerRef }).exec();
			const CartCount = await Cart.countDocuments();

			res.status(200).json({
				message: 'Cart List for client Retrieved',
				CartList: CartList,
				CartCount: CartCount,
			});
		} catch (error) {
			error.statusCode = 500;
			error.message = {
				1: 'Failed to retrieve Carts,no carts are listed for customerRef',
				2: error.message,
			};
			next(error);
		}
	}

	static async getOne(req, res, next) {
		const { customerRef, _id } = req.body;
		try {
			var singleCart = await Cart.find({ _id: _id, customerRef: customerRef }).exec();
			res.status(200).send({
				message: 'Cart fetch succesful',
				Cart: singleCart,
			});
		} catch (error) {
			error.statusCode = 500;
			error.message = {
				1: 'Failed to retrieve Cart,either id is not found or no carts are listed for customer',
				2: error.message,
			};
			next(error);
		}
	}
}

module.exports = CartController;
