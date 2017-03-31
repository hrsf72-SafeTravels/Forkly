// If Heroku is NOT running, run on local computer and pull local info from setup.js
if (!process.env.CLIENT_ID) {
  // Note: index.js runs before setup.js (see server-dev script in package.json)
  var setup = require('./setup.js');
};

// TODO: remove hot module replacement for production

var express = require('express');
var bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require('../webpack.config');
var items = require('../db');
var handler = require('./requestHandler.js');
var facebook = require('./facebook.js');
var passport = require('passport');

var port = process.env.PORT || 8000;

var app = express();

const compiler = webpack(webpackConfig);

// webpack hot module replacement
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

// webpack hot module replacement
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react/dist'));

// for facebook passport authentication - don't move
app.use(express.session({ secret: 'rum ham' }));
app.use(express.cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// for Home Component - from searchRecipes function
app.post('/searchRecipes', handler.searchRecipes);

// for AddRecipe Component - from handleSubmit function
app.post('/api/addRecipe', handler.addRecipe);

// for Nav Component - from getUsername function
app.get('/username', handler.getUsername);

// to verify login
app.get('/verifylogin', function(req, res) {
  res.send(req.user);
});

// facebook passport
app.get('/auth/facebook',
  passport.authenticate('facebook', { authType: 'reauthenticate', scope:  ['user_friends', 'email'] })
);

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' })
  // function(req, res) {
  //   // Successful authentication, redirect home.
  //   res.redirect('/');
  // });
);

app.get('/logout', function(req, res){
  req.logout();
  // req.session.destroy();
  res.redirect('/');
});

app.post('/searchRecipes', handler.searchRecipes);

// to find all recipes for given user id
app.get('/getAllRecipes', handler.getUserRecipes);

app.post('/getRecipeById', handler.getRecipeById);

app.get('/getSavedRecipes', handler.getSavedRecipes);

// must be access only after signing in
app.get('/getUserFriends', handler.getUserFriends);

// to find friend's recipe after clicking on friend in friend's list
app.post('/getFriendRecipes', handler.getFriendRecipes);

app.post('/searchYoutube', handler.searchYoutube);

app.post('/saveRecipe', handler.saveRecipe);

app.get('/*', function(req, res) {
  res.redirect('/');
});

app.listen(port, function() {
  console.log('listening on port '+ port + '!');
});
