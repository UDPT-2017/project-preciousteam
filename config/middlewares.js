const express = require('express');
const session = require('express-session');
var passport = require('passport');
const bodyParser = require('body-parser');
var multer = require('multer');


module.exports = function(app)
{
	app.use(express.static('public'));
	app.use('/components', express.static('bower_components'));

	app.use(bodyParser.json());

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(session({
		secret : "secret",
	  	saveUninitialized: true,
	 	resave: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());
	require('../config/passport')(passport);
}
