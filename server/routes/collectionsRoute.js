const express = require('express');
const collectionsController = require('../controllers/collectionsController');

const router = express.Router();

router.route('/').get(collectionsController.getAllCollections);
router.route('/:id').get(collectionsController.getCollection);

module.exports = router;
