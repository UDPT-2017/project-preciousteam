const bodyParser = require('body-parser');
const controllers = require('../app/controllers');
const LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');

module.exports = function(app) {

	app.get('/home', controllers.home.index);

	app.get('/logIn', controllers.logIn.index);
	app.post('/logIn', passport.authenticate('local-login'), function(req, res){
        
		if (req.user != null)
        {
        	console.log(req.body);
            req.app.locals.user = req.user;
			res.send('/home');
        }
		else
			res.send('fail');
	});
	app.get('/register', controllers.register.index);
	app.get('/index', controllers.user.index);
	app.get('/profile', controllers.user.profile);
	app.get('/cart', controllers.user.cart);
	app.get('/posts', controllers.user.posts);
	app.get('/createpost', controllers.user.createpost);
	app.post('/register', controllers.register.submit);
	app.get('/activateAnnounce', controllers.register.activateAnnounce);
	app.get('/activate/:userid', controllers.register.activate);
	app.get('/activatePage/:userid', controllers.register.activateSuccess);

	app.post('/logOut', controllers.logIn.logOut);

	app.get('/homeAdmin', controllers.admin.index);
	app.get('/addStaff', controllers.admin.addStaff);
	app.get('/staffList', controllers.admin.staffList);
	app.get('/staffDetail', controllers.admin.staffDetail);

	app.get('/homeStaff', controllers.staff.index);
	app.get('/customers', controllers.staff.customers);


};
