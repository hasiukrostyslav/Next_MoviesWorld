const express = require('express');
const moviesController = require('../controllers/moviesController');

const router = express.Router();

router.route('/').get(moviesController.getMovieListsByCategory);
router.route('/category/:key').get(moviesController.getMoviesList);

module.exports = router;
