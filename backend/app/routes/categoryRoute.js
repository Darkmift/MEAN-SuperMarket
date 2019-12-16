const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/categoryController');
const { validationRules, validate } = require('../middleware/validator');
const auth = require('../middleware/check-auth');

router.post('/create', auth, validationRules('categoryName'), validate, CategoryController.create);
router.get('/get', auth, CategoryController.getAll);
router.get('/get/:id', auth, validationRules('categoryId'), validate, CategoryController.getOne);

module.exports = router;
