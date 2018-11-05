var express = require('express');
var mongoose = require('mongoose');
var routes = require('./app/routes');

var app = express();

app.use(routes);

const dbHost = 'localhost';
const dbPort = 27017;
const dbName = 'ZignalLabs';

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, { useNewUrlParser: true });

const port = 3000;

app.listen(3000, function () {
  console.log(`Server initialized on port ${port}`);
});