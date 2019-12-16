var Category = require('../models/Category');

class CategoryController {
	static async create(req, res, next) {
		try {
			let name = req.body.name;

			const category = new Category({
				name: name,
			});

			const createdCategory = await category.save();
			res.status(201).json({
				message: 'Category Added to db',
				result: createdCategory,
			});
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async getAll(req, res, next) {
		try {
			const categoryList = await Category.find().exec();
			const categoryCount = await Category.countDocuments();

			res.status(200).json({
				message: 'Category List Retrieved',
				categoryList: categoryList,
				categoryCount: categoryCount,
			});
		} catch (error) {
			error.statusCode = 500;
			next(error);
		}
	}

	static async getOne(req, res, next) {
		try {
			var singleCategory = await Category.findById(req.params.id).exec();
			res.status(200).send({
				message: 'Category fetch succesful',
				category: singleCategory,
			});
		} catch (error) {
			error.statusCode = 500;
			error.message = { 1: 'Failed to retrieve category with provided id', 2: error.message };
			next(error);
		}
	}
}

module.exports = CategoryController;
