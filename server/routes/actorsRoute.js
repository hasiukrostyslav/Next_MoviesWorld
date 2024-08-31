const express = require('express');
const actorsController = require('../controllers/actorsController');

const router = express.Router();

router.route('/').get(actorsController.getAllActors);

module.exports = router;
