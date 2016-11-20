var express = require('express');
var app = express();
var passport = require('passport');

var flash    = require('connect-flash');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var firebase = require("firebase");
var mqttService = require("./app/mqttService.js");

mqttService.init(); // start connection to

var config = {
  serviceAccount: "app/config/citofono-aleandri-494b90f93463.json",
  databaseURL: "https://citofono-aleandri.firebaseio.com/"
  
};
firebase.initializeApp(config);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('port', (process.env.PORT || 5000));



app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


require('./app/passport.js')(passport); // load our routes and pass in our app and fully configured passport


require('./app/routes.js')(app, passport,firebase); // load our routes and pass in our app and fully configured passport


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

require('./app/API/mqttAPI.js')(app, router); // load our routes and pass in our app and fully configured passport



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


