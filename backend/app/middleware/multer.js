const multer = require('multer');
const path = require('path');
const folderPath = path.join(__dirname, '../public/images');

const MIME_TYPE_MAP = {
	'image/png': 'png',
	'image/jpeg': 'jpg',
	'image/jpg': 'jpg',
};
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const isValid = MIME_TYPE_MAP[file.mimetype];
		let error = new Error('Invalid Mime Type');
		if (isValid) {
			error = null;
		}
		cb(error, folderPath);
	},
	filename: (req, file, cb) => {
		const name = file.originalname
			.toLowerCase()
			.split(' ')
			.join('-');
		const ext = MIME_TYPE_MAP[file.mimetype];
		// cb(null, name + '-' + Date.now() + '.' + ext);
		cb(null, Date.now() + '.' + ext);
	},
});

module.exports = storage;
