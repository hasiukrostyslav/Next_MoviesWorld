const express = require('express');
const homeController = require('../controllers/homeController');

const router = express.Router();

router.route('/').get(homeController.getHomePageData);
router.route('/trending/movies').get(homeController.getTrendingMovies);
router.route('/trending/tv').get(homeController.getTrendingShows);

module.exports = router;
