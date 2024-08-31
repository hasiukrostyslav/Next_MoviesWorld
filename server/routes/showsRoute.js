const express = require('express');
const showsController = require('../controllers/showsController');

const router = express.Router();

router.route('/').get(showsController.getShowListsByCategory);
router.route('/category/:key').get(showsController.getShowList);

module.exports = router;
