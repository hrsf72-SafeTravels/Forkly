var express = require('express');
var bodyParser = require('body-parser');
var items = require('../db');

var app = express();

app.use(express.static(__dirname + '/../react/dist'));

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

