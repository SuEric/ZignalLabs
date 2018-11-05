var express = require('express');
var userRoutes = require('./users');

var router = express.Router();

// Hello world enpoint
router.get('/', function (_, res) {
  res.send('Welcome to ZignalLabs API');
});

// All Modules Below

router.use('/users', userRoutes);

module.exports = router;