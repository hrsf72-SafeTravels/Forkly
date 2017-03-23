var express = require('express');
var db = require('../db/index.js');
var User = db.User;

const passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

// Use facebook strategy
passport.use(new FacebookStrategy({
    clientID: '1324391347626035',
    clientSecret: 'd38f57c367a9000982c01b26ccd320c2',
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
   function(accessToken, refreshToken, profile, done) {
      // console.log('profile: ', profile);
      // console.log('accessToken', accessToken);
      // console.log('refreshToken', refreshToken);
       //check user table for anyone with a facebook ID of profile.id
       User.findOne({
           'facebook.id': profile.id
       }, function(err, user) {
           if (err) {
               return done(err);
           }
           //No user was found... so create a new user with values from Facebook (all the profile. stuff)
           if (!user) {
               user = new User({
                   name: profile.displayName,
                   // email: profile.emails[0].value,
                   // username: profile.username,
                   provider: 'facebook',
                   //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
                   // facebook: profile._json
               });
               user.save(function(err) {
                   if (err) console.log(err);
                   return done(err, user);
               });
           } else {
               //found user. Return
               return done(err, user);
           }
       });
   }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});