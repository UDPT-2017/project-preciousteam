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
	app.get('/index', controllers.user.index);
	app.get('/profile', controllers.user.profile);
	app.get('/cart', controllers.user.cart);
	app.get('/posts', controllers.user.posts);
	app.get('/createpost', controllers.user.createpost);

	// app.get('/about', controllers.user.about);
	// app.get('/contact', controllers.user.contact);

	app.get('/homeAdmin', controllers.admin.index);
	app.get('/addStaff', controllers.admin.addStaff);
	app.get('/staffList', controllers.admin.staffList);

	app.get('/homeStaff', controllers.staff.index);
	app.get('/customers', controllers.staff.customers);
	app.get('/userDetail/:id', controllers.staff.userDetail);
	app.get('/allPosts', controllers.staff.allPosts);
	app.get('/newPosts', controllers.staff.newPosts);
	app.get('/postDetails/:id', controllers.staff.postDetail);
	app.get('/orders', controllers.staff.orders);

	app.get('/editProfile', controllers.staff.editProfile);

	app.get('/mailbox', controllers.staff.mailbox);


};
