var Order = require('../models/Order');

class OrderController {
	static async create(req, res, next) {
		try {
			let { name, customerRef, cartRef, total, city, street, deliveryDate, ccLastDigits } = req.body;

			const newOrder = new Order({
				name: name,
				customerRef: customerRef,
				cartRef: cartRef,
				total: total,
				city: city,
				street: street,
				deliveryDate: deliveryDate,
				ccLastDigits: ccLastDigits,
			});

			const createdOrder = await newOrder.save();
			res.status(201).json({
				message: 'Order Added to db',
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
}

module.exports = OrderController;
