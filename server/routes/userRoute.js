const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/').get(userController.getCurrentUser);

module.exports = router;
