var CartItem = require('../models/CartItem');

class CartItemController {
	static async updateOrCreate(req, res, next) {
		try {
			let { cartRef, productRef, amount } = req.body;
			console.log('TCL: CartItemController -> updateOrCreate -> req.body', req.body);
			const uniqueName = `${productRef}_${cartRef}`;

			let options = { upsert: true, new: true, setDefaultsOnInsert: true };
			// Find the document
			const cartItemExists = await CartItem.findOneAndUpdate(
				{ uniqueName: uniqueName },
				{ amount: amount },
				options,
				function(error, result) {
					console.log('TCL: CartItemController -> updateOrCreate -> result', result);
					if (error) {
						console.log('TCL: CartItemController -> updateOrCreate -> errorA', error.message);
						throw error;
					}

					// If the document doesn't exist
					if (!result) {
						// Create it
						result = new CartItem({
							cartRef: cartRef,
							productRef: productRef,
							amount: amount,
						});
					}
					// Save the document
					// result.save(function(error) {
					// 	if (!error) {
					// 		res.status(201).json({
					// 			message: 'CartItem fetched from db',
					// 			cartItem: result,
					// 		});
					// 	} else {
					// 		console.log('TCL: CartItemController -> updateOrCreate -> errorB', error.message);
					// 		throw error;
					// 	}
					// });
				},
			).exec();
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
			var singleCartItem = await CartItem.find({ _id: _id }).exec();
			res.status(200).send({
				message: 'CartItem fetch succesful',
				CartItem: singleCartItem,
			});
		} catch (error) {
			error.statusCode = 500;
			error.message = {
				1: 'Failed to retrieve CartItem,either id is not found or no CartItem does not exist',
				2: error.message,
			};
			next(error);
		}
	}
}

module.exports = CartItemController;
