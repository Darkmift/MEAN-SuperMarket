const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { validationRules, validate } = require('../middleware/validator');
const auth = require('../middleware/check-auth');

router.post('/create', auth, validationRules('orderCreate'), validate, orderController.create);
router.get('/getAll', auth, validationRules('orders'), validate, orderController.getAll);
router.get('/getOne', auth, validationRules('orderId'), validate, orderController.getOne);
router.get('/getCount', auth, orderController.getCount);
module.exports = router;
