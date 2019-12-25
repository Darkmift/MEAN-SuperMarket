var CartItem = require('../models/CartItem');

class CartItemController {
	static async updateOrCreate(req, res, next) {
		try {
			let { cartRef, productRef, amount } = req.body;

			var query = { cartRef: cartRef, productRef: productRef },
				update = { amount: amount },
				options = { upsert: true, new: true, setDefaultsOnInsert: false, res: res, result: null };

			const updateOrCreate = await CartItem.findOneAndUpdate(query, update, options, function(error, result) {
				if (error) return;
				// console.log('TCL: CartItemController -> updateOrCreate -> result', result);
				// do something with the document
			}).exec();

			const newOrUpdatedDocument = updateOrCreate;
			console.log('TCL: CartItemController -> updateOrCreate -> newOrUpdatedDocument', newOrUpdatedDocument);

			res.status(200).json({
				isNew: false,
				message: 'item updated',
				productItem: newOrUpdatedDocument,
			});

			// var query = { cartRef: cartRef, productRef: productRef },
			// 	update = { amount: amount },
			// 	options = { upsert: true, new: true, setDefaultsOnInsert: false, res: res, result: null };

			// Find the document
			// const updateOrCreate = await CartItem.findOneAndUpdate(query, update, options, function(error, result) {
			// 	if (error) return;
			// 	console.log('TCL: CartItemController -> updateOrCreate -> result', result);
			// 	// do something with the document
			// }).exec();

			// if (updateOrCreate) {
			// 	// const result = await CartItem.findById(updateOrCreate._id);
			// 	console.log('TCL: CartItemController -> updateOrCreate -> result', options.result);

			// 	res.status(200).json({
			// 		isNew: false,
			// 		message: 'item updated',
			// 		productItem: options.result,
			// 	});
			// 	return;
			// }

			// res.status(200).json({
			// 	isNew: false,
			// 	message: 'item updated',
			// 	productItem: updateOrCreate,
			// });
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
