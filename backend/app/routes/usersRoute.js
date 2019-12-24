const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { validationRules, validate } = require('../middleware/validator');
const auth = require('../middleware/check-auth');

router.get(
	'/uniqueIdAndEmail/:tzId/:email',
	validationRules('uniqueIdAndEmail'),
	validate,
	UserController.uniqueIdAndEmail,
);
router.get('/isAdmin/:id', auth, validationRules('isAdmin'), validate, UserController.isAdmin);
router.post('/login', validationRules('login'), validate, UserController.login);
router.post('/signup', validationRules('signup'), validate, UserController.signup);

module.exports = router;
