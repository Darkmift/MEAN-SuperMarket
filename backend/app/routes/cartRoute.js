const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { validationRules, validate } = require('../middleware/validator');
const auth = require('../middleware/check-auth');

router.post('/create', auth, validationRules('cartCreate'), validate, cartController.create);
router.get('/getAll/:customerRef', auth, validationRules('carts'), validate, cartController.getAll);
router.get('/getLastActiveCart/:id', validationRules('getLastActiveCart'), validate, cartController.getLastActiveCart);
router.get('/getCount', auth, cartController.getCount);
router.get('/getOne/:customerRef/:_id/', auth, validationRules('cartId'), validate, cartController.getOne);

module.exports = router;
