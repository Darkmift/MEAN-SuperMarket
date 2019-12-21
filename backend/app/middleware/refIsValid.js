const mongoose = require('mongoose');

// checks ref id is in the referenced collection
module.exports = (value, respond, modelName) => {
	return modelName
		.countDocuments({ _id: value })
		.exec()
		.then(function(count) {
			return count > 0;
		})
		.catch(function(err) {
			throw err;
		});
};
