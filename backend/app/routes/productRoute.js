const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { validationRules, validate } = require('../middleware/validator');
const auth = require('../middleware/check-auth');

router.post('/create', auth, validationRules('productCreate'), validate, productController.create);
router.put('/edit', auth, validationRules('productEdit'), validate, productController.edit);
router.get('/getAll', auth, productController.getAll);
router.get('/get/:id', auth, validationRules('productId'), validate, productController.getOne);
router.get('/getCount', auth, productController.getCount);
router.get('/getByCategory/:id', auth, validationRules('productId'), validate, productController.getByCategory);

module.exports = router;
