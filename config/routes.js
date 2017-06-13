const bodyParser = require('body-parser');
const controllers = require('../app/controllers');
const LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');

module.exports = function(app) {

	app.get('/home', controllers.home.index);

	app.get('/logIn', controllers.logIn.index);
	app.post('/logIn', passport.authenticate('local-login'), function(req, res){
        console.log(req.body);
		if (req.user != null)
        {
            req.app.locals.user = req.user;
			res.end('/home');
        }
		else
			res.end('fail');});
	app.get('/register', controllers.register.index);

	app.get('/homeAdmin', controllers.admin.index);
	app.get('/addStaff', controllers.admin.addStaff);
	app.get('/staffList', controllers.admin.staffList);
	app.get('/staffDetail', controllers.admin.staffDetail);

	app.get('/homeStaff', controllers.staff.index);
	app.get('/customers', controllers.staff.customers);

};
