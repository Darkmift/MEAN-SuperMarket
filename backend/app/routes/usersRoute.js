const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { validationRules, validate } = require('../middleware/validator');

router.post('/login', validationRules('login'), validate, UserController.login);
router.post('/signup', validationRules('signup'), validate, UserController.signup);

module.exports = router;
