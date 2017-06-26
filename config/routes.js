const bodyParser = require('body-parser');
const controllers = require('../app/controllers');
const LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var Router = require('express').Router;

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
	app.get('/product/:catename', controllers.product.index);
	app.get('/single/:productid', controllers.product.detail);
	app.post('/add2Cart', controllers.cart.add);
	app.post('/deleteItem', controllers.cart.delete);
	app.post('/checkout', controllers.cart.checkout);
	app.post('/addReview', controllers.product.addReview);
	app.post('/createPost', controllers.product.createPost);
	app.post('/logOut', controllers.logIn.logOut);
	app.post('/deletePost', controllers.product.deleteProduct);
	app.post('/updateProfile', controllers.user.updateUser);

	app.get('/404/:id', controllers.user.err);

	var addDiscount = Router()
		.get('/', controllers.user.addDiscount)
		.post('/', controllers.user.addDiscountSave);

	var about = Router()
		.get('/', controllers.user.about);

	var contact = Router()
		.get('/', controllers.user.contact)
		.post('/', controllers.user.sendMessage);

	var homeAdmin = Router()
			.get('/', controllers.admin.index);
	var addStaff = Router()
			.get('/', controllers.admin.addStaff)
			.post('/', controllers.admin.createStaff);
	var staffList = Router()
			.get('/', controllers.admin.staffList);

	var homeStaff = Router()
		.get('/', controllers.staff.index);
	var customers = Router()
		.get('/', controllers.staff.customers);
	var userDetail = Router()
		.get('/:id', controllers.staff.userDetail)
		.post('/:id', controllers.staff.blockUser);
	var allPosts = Router()
		.get('/', controllers.staff.allPosts);
	var newPosts = Router()
		.get('/', controllers.staff.newPosts)
		.post('/', controllers.staff.checkPost);
	var postDetails = Router()
		.get('/:id', controllers.staff.postDetail)
		.post('/:id', controllers.staff.checkPost);
	var orders = Router()
		.get('/', controllers.staff.orders);
	var editProfile = Router()
		.get('/', controllers.staff.editProfile);

	var mailbox = Router()
		.get('/', controllers.staff.mailbox)
		.post('/', controllers.staff.readmail);

	app.use('/homeAdmin', homeAdmin);
	app.use('/addStaff', addStaff);
	app.use('/staffList', staffList);

	app.use('/homeStaff', homeStaff);
	app.use('/customers', customers);
	app.use('/userDetail', userDetail);
	app.use('/allPosts', allPosts);
	app.use('/newPosts', newPosts);
	app.use('/postDetails', postDetails);
	app.use('/orders', orders);
	app.use('/editProfile', editProfile);
	app.use('/mailbox', mailbox);

	app.use('/about', about);
	app.use('/contact', contact);
	app.use('/addDiscount', addDiscount);

};
