var request = require('request');
var mongoose = require('mongoose');
var Promise = require("bluebird");

var db = require("../db/index.js");

exports.searchRecipes = function(req, res) {
  var searchTerm = req.body.searchTerm;
 
  db.Recipe.find({name: searchTerm})
    .exec(function (err, recipe) {
      if (err) 
      	{
      	  return err;
      	} else {
      	res.json(recipe);
      }
	});



}