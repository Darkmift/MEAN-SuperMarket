var CartItemItem = require('../models/CartItemItem');

class CartItemController {
	static async create(req, res, next) {
		try {
			let { cartRef, productRef, amount } = req.body;
			const newCartItem = new CartItem({
				name: `${cartRef}_${Date.now()}`,
				productRef: productRef,
				cartRef: cartRef,
				price: 0,
				imgUrl: 'http://www.easy3d.co.il/images/joomlart/404.jpg',
				amount: amount,
				price: 0,
				total: 0,
			});

			const createdCartItem = await newCartItem.save();
			res.status(201).json({
				message: 'CartItem Added to db',
				result: createdCartItem,
			});
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async itemsByCart(req, res, next) {
		const { cartRef } = req.body;
		try {
			const CartItemList = await CartItem.find({ cartRef: cartRef }).exec();
			const CartItemCount = await CartItem.countDocuments();

			res.status(200).json({
				message: 'CartItem List for client Retrieved',
				CartItemList: CartItemList,
				CartItemCount: CartItemCount,
			});
		} catch (error) {
			error.statusCode = 500;
			error.message = {
				1: 'Failed to retrieve CartItems,no CartItems are listed for cartRef',
				2: error.message,
			};
			next(error);
		}
	}

	static async getOne(req, res, next) {
		const { _id } = req.params;
		try {
			var singleCartItem = await CartItem.find({ _id: _id, cartRef: cartRef }).exec();
			res.status(200).send({
				message: 'CartItem fetch succesful',
				CartItem: singleCartItem,
			});
		} catch (error) {
			error.statusCode = 500;
			error.message = {
				1: 'Failed to retrieve CartItem,either id is not found or no CartItems are listed for customer',
				2: error.message,
			};
			next(error);
		}
	}
}

module.exports = CartItemController;
