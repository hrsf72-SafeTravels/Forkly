 /*

BACKGROUND:
"process" is built into node

process.env is the environment in which node is running at the time, 
simlar to our terminal's env

process.env.variable makes a temporary variable inside "env" that your 
env (or Heroku) can utilize in its session

TO DO: 
input CLIENT_ID and CLIENT_SECRET and save as setup.js, which will be 
gitignored. Remember to not make this info public!

*/

process.env.CLIENT_ID = 'CLIENT_ID';
process.env.CLIENT_SECRET = 'CLIENT_SECRET';
process.env.MONGODB_URI = 'mongodb://localhost/forkly-dev';
process.env.SITE_URL = 'http://localhost:3000/';