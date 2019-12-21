const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { validationRules, validate } = require('../middleware/validator');

router.get('/getLastActiveCart/:id', validationRules('getLastActiveCart'), validate, UserController.getLastActiveCart);
router.get('/uniqueIdAndEmail/:tzId/:email', validationRules('uniqueIdAndEmail'), validate, UserController.uniqueIdAndEmail);
router.post('/login', validationRules('login'), validate, UserController.login);
router.post('/signup', validationRules('signup'), validate, UserController.signup);


module.exports = router;
