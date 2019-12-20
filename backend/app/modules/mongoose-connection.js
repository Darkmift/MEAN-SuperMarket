const mongoose = require('mongoose');
const { ErrorHandler } = require('./error');
const User = require('../models/User');
const Category = require('../models/Category');

const mongooseConnection = mongoose
	.connect(process.env.MONGO_CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('connected to DB');

		if (global.firstInitialize) {

			mongoose.connection.collections['products'].drop(function(err) {
				console.log('products dropped');
      });
      
			mongoose.connection.collections['orders'].drop(function(err) {
				console.log('orders dropped');
      });
      
			// mongoose.connection.collections['cartitems'].drop(function(err) {
			// 	console.log('cartitems dropped');
      // });
      
			mongoose.connection.collections['carts'].drop(function(err) {
				console.log('carts dropped');
      });
      
			mongoose.connection.collections['users'].drop(function(err) {
				console.log('users dropped--adding demo admin & user');
				new User({
					email: 'sysadmin@email.com',
					password:'MooCow1',
					isAdmin: true,
					firstName: 'AdminFname',
					lastName: 'AdminLname',
					city: 'TLV',
					iic: '789546324',
					street: 'main st',
				}).save();

				new User({
					email: 'shopper1@email.com',
          password:'MooCow1',
					firstName: 'shopperFname',
					lastName: 'shopperLname',
					city: 'Haifa',
					iic: '781546524',
					street: 'first st',
				}).save();
      });
      
			mongoose.connection.collections['categories'].drop(function(err) {
				console.log('cateogries dropped -- adding default set');
				new Category({ name: 'Milk & Eggs' }).save();
				new Category({ name: 'Vegetable & Fruits' }).save();
				new Category({ name: 'Meat & Fish' }).save();
				new Category({ name: 'Wine & Drinks' }).save();
      });
      
		}
	})
	.catch(err => {
		console.error('DB connection failed:', err);
	});

mongoose.set('useCreateIndex', true);

module.exports = { mongooseConnection };
