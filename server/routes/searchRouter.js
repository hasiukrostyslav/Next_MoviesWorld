const express = require('express');
const searchController = require('../controllers/searchController');

const router = express.Router();

router.route('/').get(searchController.getSearchedItems);

module.exports = router;
