var CartItem = require('../models/CartItem');

class CartItemController {
	static async updateOrCreate(req, res, next) {
		try {
			let { cartRef, productRef, amount } = req.body;
			let options = { upsert: true, new: true, setDefaultsOnInsert: true, setDefaultsOnInsert: true };
			// const uniqueName = `${productRef._id}_${cartRef._id}`;

			const itemExists = await CartItem.findOneAndUpdate(
				{ cartRef: cartRef, productRef: productRef },
				{ amount: amount },
				options,
			);
			console.log('TCL: CartItemController -> updateOrCreate -> itemExists', itemExists);
			if (itemExists) {
				res.status(200).json({
					isNew: false,
					message: 'item updated',
					productItem: itemExists,
				});
				return;
			}

			const newProductItem = await new CartItem({
				cartRef,
				productRef,
				amount,
			}).save();

			console.log('TCL: CartItemController -> updateOrCreate -> newProductItem', newProductItem);
			res.status(200).json({
				isNew: true,
				message: 'new item created',
				productItem: newProductItem,
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
