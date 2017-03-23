var express = require('express');
var bodyParser = require('body-parser');
var items = require('../db');
var handler = require('./requestHandler.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react/dist'));

app.post('/searchRecipes', handler.searchRecipes);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

