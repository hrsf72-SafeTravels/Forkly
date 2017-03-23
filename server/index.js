var express = require('express');
var bodyParser = require('body-parser');
var items = require('../db');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react/dist'));

app.post('/api/addRecipe', (req, res) => {
  console.log(req.body);
  res.send('');
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});