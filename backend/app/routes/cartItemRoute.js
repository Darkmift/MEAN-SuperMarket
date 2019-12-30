const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cartItemController');
const { validationRules, validate } = require('../middleware/validator');
const auth = require('../middleware/check-auth');

router.post('/', auth, validationRules('cartItemCreate'), validate, cartItemController.createOrUpdate);
router.get('/cart/:cartRef', auth, validationRules('itemsByCart'), validate, cartItemController.itemsByCart);
router.get('/single/:cartRef/:productRef', auth, validationRules('cartItemSingle'), validate, cartItemController.getOne);
module.exports = router;
