var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var recipeSchema = mongoose.Schema({
  // dropDups will drop duplicates. will need to restart mongo router for these to kick in
  name: {type: String, unique: true, dropDups: true, required: true},
  ingredients: Array,
  directions: String
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports.Recipe = Recipe;

var selectAllRecipes = function(callback) {
  Recipe.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

// User schema
var userSchema = mongoose.Schema({
  // username: {type: String, unique: true},
  // hash: String,
  // salt: String,
  // username: String,
  name: String,
  provider: String,
  facebook: Object,
  forks: Array
});

var User = mongoose.model('User', userSchema);

module.exports.User = User;

module.exports.selectAllRecipes = selectAllRecipes;