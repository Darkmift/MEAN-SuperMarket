var Cart = require('../models/Cart');
var CartItem = require('../models/CartItem');

class CartController {
	static async create(req, res, next) {
		try {
			let { customerRef } = req.body;
			const newCart = new Cart({
				name: `${customerRef}_${Date.now()}`,
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

	static async getCount(req, res, next) {
		try {
			const CartCount = await Cart.countDocuments();

			res.status(200).json({
				message: 'all cart count Retrieved',
				CartCount: CartCount,
			});
		} catch (error) {
			error.statusCode = 500;
			error.message = {
				1: 'Failed to retrieve Carts',
				2: error.message,
			};
			next(error);
		}
	}

	static async getAll(req, res, next) {
		const { customerRef } = req.params;
		try {
			const CartList = await Cart.find({ customerRef: customerRef });
			const CartCount = await Cart.countDocuments({ customerRef: customerRef });

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
		const { customerRef, _id } = req.params;
		try {
			var singleCart = await Cart.find({
				_id: _id,
				customerRef: customerRef,
			}).exec();
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

	static async getLastActiveCart(req, res, next) {
		try {
			const { id } = req.params;

			const lastCart = await Cart.find({ customerRef: id, active: true })
				.sort({ dateEdited: -1 })
				.limit(1)
				.lean();

			if (lastCart[0] != undefined) {
				return res.status(200).json({
					message: 'fetched last cart',
					lastCart: lastCart,
				});
			} else {
				return res.status(200).json({
					message: 'no carts found for customerRef',
					lastCart: 0,
				});
			}
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async setCartTotal(req, res, next) {
		try {
			const { id } = req.params;

			const lastCart = await Cart.findById(id).lean();

			if (lastCart) {
				const cartRef = lastCart._id;
				const itemsInCart = await CartItem.find({ cartRef });

				if (itemsInCart.length) {
					let sum = itemsInCart.reduce((total, item) => {
						return total + item.total;
					}, 0);
					sum = sum.toFixed(2);
					const updateTotal = await Cart.findByIdAndUpdate(cartRef, { total: sum }, { new: true });

					return res.status(200).json({
						message: 'cart total updated',
						cartTotal: updateTotal.total,
					});
				}
			}
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}
}

module.exports = CartController;
