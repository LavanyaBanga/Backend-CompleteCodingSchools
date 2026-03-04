const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getForm);
router.post('/add', userController.createUser);
router.get('/users', userController.getUsers);

module.exports = router;