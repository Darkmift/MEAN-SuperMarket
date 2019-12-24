/*
* as per project requirements there is no delete method
*/
const Product = require('../models/Product');
const { ErrorHandler } = require('../modules/error');
var ObjectId = require('mongoose').Types.ObjectId;

class ProductController {
	static async create(req, res, next) {
		try {
			let { name, categoryId, imgUrl, price, amount } = req.body;

			const newProduct = new Product({
				name: name,
				category: categoryId,
				price: price,
				imgUrl: imgUrl,
				amount: amount,
			});

			const createdProduct = await newProduct.save();
			res.status(201).json({
				message: 'Product Added to db',
				result: createdProduct,
			});
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async edit(req, res, next) {
		try {
			let { name, categoryId, imgUrl, price, _id, amount } = req.body;

			const outputProduct = await Product.updateOne(
				{ _id: _id },
				{
					name: name,
					category: categoryId,
					price: price,
					imgUrl: imgUrl,
					amount: amount,
				},
			).exec();
			console.log('TCL: ProductController -> edit -> outputProduct', outputProduct);

			let message;
			if (outputProduct.n > 0) {
				message = 'Product update Completed: ' + outputProduct.n;
			} else {
				message = 'Product update Failed: ' + outputProduct.n;
				throw new ErrorHandler(401, message);
			}

			res.status(201).json({
				message: `Product:${name} edited succesfully`,
				result: outputProduct.n,
			});
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async getAll(req, res, next) {
		try {
			const ProductList = await Product.find().exec();
			const ProductCount = await Product.countDocuments();

			res.status(200).json({
				message: 'Product List Retrieved',
				ProductList: ProductList,
				ProductCount: ProductCount,
			});
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async getOne(req, res, next) {
		try {
			var singleProduct = await Product.findById(req.params.id).exec();
			res.status(200).send({
				message: 'Product fetch succesful',
				Product: singleProduct,
			});
		} catch (error) {
			error.statusCode = 500;
			error.message = { 1: 'Failed to retrieve Product with provided id', 2: error.message };
			next(error);
		}
	}

	static async getCount(req, res, next) {
		try {
			const ProductCount = await Product.countDocuments();

			if (isNaN(ProductCount)) {
				throw new ErrorHandler(500, 'error fetching product count');
			}

			res.status(200).json({
				message: 'Product count retrieved',
				ProductCount: ProductCount,
			});
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async getByCategory(req, res, next) {
		const { id } = req.params;
		console.log('TCL: ProductController -> getByCategory -> id', id);

		try {
			const productsByCategory = await Product.find(
				{
					category: new ObjectId(id),
				},
				function(err, documents) {
					if (err) {
						throw new ErrorHandler(500, err.message);
					}
					console.log('TCL: ProductController -> getByCategory -> documents', documents);
				},
			).exec();
			res.status(200).send({
				message: 'Product for category fetch succesful',
				Product: productsByCategory,
			});
		} catch (error) {
			error.statusCode = 500;
			error.message = { 1: 'Failed to retrieve Product with provided id', 2: error.message };
			next(error);
		}
	}
}

module.exports = ProductController;
