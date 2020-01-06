const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { validationRules, validate } = require('../middleware/validator');
const auth = require('../middleware/check-auth');
const multer = require('multer');
const storage = require('../middleware/multer');

router.post(
	'/create',
	auth,
	multer({ storage: storage }).single('image'),
	validationRules('productCreate'),
	validate,
	productController.create,
);
router.put(
	'/edit',
	auth,
	multer({ storage: storage }).single('image'),
	validationRules('productEdit'),
	validate,
	productController.edit,
);
router.get('/getAll', auth, productController.getAll);
router.get('/get/:id', auth, validationRules('productId'), validate, productController.getOne);
router.get('/getCount', auth, productController.getCount);
router.get('/getByCategory/:id', auth, validationRules('productId'), validate, productController.getByCategory);
router.get('/search/:searchValue', auth, validationRules('searchValue'), validate, productController.matchSearch);

module.exports = router;
