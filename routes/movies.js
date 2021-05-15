var express = require('express');
var router = express.Router();
const movieController = require('../contollers/movies');

/* GET users listing. */
router.get('/',movieController.getMovies);

module.exports = router;
