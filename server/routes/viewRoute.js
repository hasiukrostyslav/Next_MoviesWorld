const express = require('express');
const moviesController = require('../controllers/moviesController');
const actorsController = require('../controllers/actorsController');
const showsController = require('../controllers/showsController');

const router = express.Router();

router.route('/movie/:id').get(moviesController.getMovie);
router.route('/actor/:id').get(actorsController.getActor);
router.route('/tv/:id').get(showsController.getShow);
router.route('/tv/:id/season/:seasonId').get(showsController.getSeason);
router
  .route('/tv/:id/season/:seasonId/episode/:episodeId')
  .get(showsController.getEpisode);
module.exports = router;
