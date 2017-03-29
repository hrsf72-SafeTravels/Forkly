var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

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
  directions: String,
  _creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
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
  // _id: String,
  name: String,
  provider: String,
  facebook: Object,
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  friends: []
});

var User = mongoose.model('User', userSchema);

module.exports.User = User;

module.exports.selectAllRecipes = selectAllRecipes;