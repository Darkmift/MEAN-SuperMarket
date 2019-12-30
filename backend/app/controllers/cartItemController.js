var CartItem = require('../models/CartItem');
var Cart = require('../models/Cart');
var Product = require('../models/Product');

class CartItemController {
	static async createOrUpdate(req, res, next) {
		try {
			let { cartRef, productRef, amount } = req.body;

			const uniqueName = `${productRef}_${cartRef}`;
			const itemExist = await CartItem.findOne({ uniqueName }).lean();
			console.log('TCL: CartItemController -> createOrUpdate -> itemExist', itemExist);

			if (itemExist) {
				const updatedItem = await CartItem.updateOne(
					{ uniqueName },
					{ amount, total: (itemExist.price * amount).toFixed(2) },
					{ new: true },
				);

				if (updatedItem) {
					const postUpdateItem = await CartItem.findOne({ uniqueName }).lean();

					res.status(200).json({
						isNew: false,
						message: 'item found & updated',
						productItem: postUpdateItem,
					});
				}
			} else {
				const refProduct = await Product.findById(productRef).lean();

				const newCartItem = new CartItem({
					name: refProduct.name,
					price: refProduct.price,
					amount: amount,
					cartRef: cartRef,
					productRef: productRef,
					imgUrl: refProduct.imgUrl,
					total: (refProduct.price * amount).toFixed(2),
					uniqueName: uniqueName,
				});

				const savedCartItem = await newCartItem.save();

				res.status(200).json({
					isNew: true,
					message: 'item created',
					productItem: savedCartItem,
				});
			}
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async itemsByCart(req, res, next) {
		const { cartRef } = req.params;
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
		const { cartRef, productRef } = req.params;
		console.log('TCL: CartItemController -> getOne -> req.params', req.params);
		try {
			var singleCartItem = await CartItem.findOne({ cartRef, productRef }).exec();
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
