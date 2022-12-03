var express = require('express');
var router = express.Router();
const boards = require('./boards.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

router.use('/boards', boards);

module.exports = router;
