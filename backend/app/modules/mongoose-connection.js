const mongoose = require('mongoose');
const { ErrorHandler } = require('./error');
const mongooseConnection = mongoose
    .connect(process.env.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('connected to DB');
    })
    .catch(err => {
        console.error('DB connection failed:', err);
    });
mongoose.set('useCreateIndex', true);

module.exports = { mongooseConnection };