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
  ingredients: String,
  directions: String
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports.Recipe = Recipe;

Recipe.create(
  [
    {
      name: 'Hamburger', 
      ingredients: '2 cups beef, 1 Tbsp salt',
      directions: 'Mix it all up!'
    },
    {
      name: 'Beefy Hamburger', 
      ingredients: '10 cups beef, 1 Tbsp salt',
      directions: 'Mix it all up!'
    },
    {
      name: 'Noodles',
      ingredients: '1 cup noodles, 1 tspn salt',
      directions: 'Fry them together'
    }         
  ]
  , function(err, recipe) {
            if (err) {
              console.log('error creating recipe', err);
            } else {
              console.log('successfully added recipe', recipe);
            }
          });

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
  name: String,
  email: String,
  username: String,
  facebook: Object
});

var User = mongoose.model('User', userSchema);

module.exports.User = User;

// module.exports.verifyLogin = function() {

// };

module.exports.selectAllRecipes = selectAllRecipes;