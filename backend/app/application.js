const express = require('express');
const cors = require('cors');
const { handleError } = require('./modules/error');
// const path = require('path');
const bodyParser = require('body-parser');
const mongooseConnection = require('./modules/mongoose-connection');

const userRoutes = require('./routes/usersRoute');
const categoryRoutes = require('./routes/categoryRoute');
const cartRoutes = require('./routes/cartRoute');
const productRoutes = require('./routes/productRoute');
const orderRoutes = require('./routes/orderRoute');
const app = express();

mongooseConnection;

//cors allowed from all
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH,PUT, DELETE');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With, Access-Control-Allow-Headers, Content-Type, Authorization, Origin, Accept',
	);
	res.setHeader('Access-Control-Allow-Credentials', true);

	next();
});

//all other code should be here
app.use('/api/users', userRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
//end of all other code

//catch all errors and output {statusCode,message} back
app.use((err, req, res, next) => {
	handleError(err, res);
});

module.exports = app;
