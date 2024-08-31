const express = require('express');
const cartoonsController = require('../controllers/cartoonsController');

const router = express.Router();

router.route('/').get(cartoonsController.getCartoonListsByCategory);
router.route('/category/:type/:key').get(cartoonsController.getCartoonList);

module.exports = router;
