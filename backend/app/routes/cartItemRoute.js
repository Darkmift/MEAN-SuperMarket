const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cartItemController');
const { validationRules, validate } = require('../middleware/validator');
const auth = require('../middleware/check-auth');

router.post('/', auth, validationRules('cartItemCreate'), validate, cartItemController.create);
router.get('/', auth, validationRules('itemsByCart'), validate, cartItemController.itemsByCart);
router.get('/:_id', auth, validationRules('cartItemId'), validate, cartItemController.getOne);

module.exports = router;
