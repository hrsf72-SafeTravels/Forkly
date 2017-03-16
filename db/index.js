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
  name: String,
  ingredients: String,
  directions: String
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports.Recipe = Recipe;

Recipe.create(
  {
    name: 'Hamburger', 
    ingredients: '2 cups beef, 1 Tbsp salt',
    directions: 'Mix it all up!'
  }
  // ,
  // {
  //   name: 'Beefy Hamburger', 
  //   ingredients: '10 cups beef, 1 Tbsp salt',
  //   directions: 'Mix it all up!'
  // }         
  // ]
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

module.exports.selectAllRecipes = selectAllRecipes;