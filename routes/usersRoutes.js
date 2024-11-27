// routes/usersRoutes.js

const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/users', usersController.getUsers);
router.post('/users', usersController.createUser);
router.get('/users/:id', usersController.getUserById);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;
