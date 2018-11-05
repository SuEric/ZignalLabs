var express = require('express');
var UserController = require('../users').controller;

console.log(UserController);

var router = express.Router();

router.get('/', UserController.get);

module.exports = router;