var Order = require('../models/Order');
var Cart = require('../models/Cart');
var User = require('../models/User');
const { ErrorHandler } = require('../modules/error');

class OrderController {
	static async create(req, res, next) {
		try {
			let { /*name, customerRef total,*/ cartRef, city, street, deliveryDate, ccLastDigits } = req.body;

			const fetchCart = await Cart.findById(cartRef);

			if (!fetchCart) {
				throw new ErrorHandler(401, 'cart not found');
			}
			console.log('TCL: OrderController -> create -> fetchCart', fetchCart);
			const fetchCustomer = await User.findById(fetchCart.customerRef);

			// I know, I'm paranoid :)
			if (!fetchCustomer) {
				throw new ErrorHandler(401, 'customer not found');
			}

			const ordersWithDate = await Order.find({ deliveryDate });

			if (ordersWithDate.length >= 3) {
				return res.status(201).json({
					message: 'we are fully booked on that date',
					orderCreated: false,
					result: {},
				});
			}

			const name = `${fetchCustomer.lastName}_${fetchCustomer.firstName}_${fetchCart._id}`;
			const newOrder = new Order({
				name: name,
				customerRef: fetchCart.customerRef,
				cartRef: cartRef,
				total: fetchCart.total,
				city: city,
				street: street,
				deliveryDate: deliveryDate,
				ccLastDigits: ccLastDigits,
			});
			fetchCart.active = false;
			await fetchCart.save();
			console.log('TCL: OrderController -> create -> decativateCart', fetchCart);
			const createdOrder = await newOrder.save();
			res.status(201).json({
				message: 'order added to db',
				orderCreated: true,
				result: createdOrder,
			});
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async getAll(req, res, next) {
		const { customerRef } = req.body;
		try {
			const OrderList = await Order.find({ customerRef: customerRef }).exec();
			const OrderCount = await Order.countDocuments();

			res.status(200).json({
				message: 'Order List for client Retrieved',
				OrderList: OrderList,
				OrderCount: OrderCount,
			});
		} catch (error) {
			error.statusCode = 500;
			error.message = {
				1: 'Failed to retrieve Orders,no Orders are listed for customerRef',
				2: error.message,
			};
			next(error);
		}
	}

	static async getOne(req, res, next) {
		const { customerRef, _id } = req.body;
		try {
			var singleOrder = await Order.find({ _id: _id, customerRef: customerRef }).exec();
			res.status(200).send({
				message: 'Order fetch succesful',
				Order: singleOrder,
			});
		} catch (error) {
			error.statusCode = 500;
			error.message = {
				1: 'Failed to retrieve Order,either id is not found or no Orders are listed for customer',
				2: error.message,
			};
			next(error);
		}
	}

	static async getCount(req, res, next) {
		try {
			const orderCount = await Order.countDocuments();

			if (isNaN(orderCount)) {
				throw new ErrorHandler(500, 'error fetching order count');
			}

			res.status(200).json({
				message: 'Order count retrieved',
				orderCount: orderCount,
			});
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}
}

module.exports = OrderController;
