const bodyParser = require('body-parser');
const controllers = require('../app/controllers');
const LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var Router = require('express').Router;

module.exports = function(app) {

	app.get('/home', controllers.home.index);
	app.get('/404/:id', controllers.user.err);

	let logOut = Router()
		.post('/', controllers.logIn.logOut);
	let logIn = Router()
		.get('/', controllers.logIn.index)
		.post('/', passport.authenticate('local-login'), controllers.logIn.submit);

	



	//customer
	let cart = Router()
		.get('/', controllers.user.cart)
		.post('/add2Cart', controllers.cart.add)
		.post('/deleteItem', controllers.cart.delete)
		.post('/checkout', controllers.cart.checkout);

	let register = Router()
		.get('/', controllers.register.index)
		.post('/', controllers.register.submit);



	let single = Router()
		.post('/addReview', controllers.product.addReview)
		.get('/:productid', controllers.product.detail);

	let createPost = Router()
		.get('/', controllers.user.createpost)
		.post('/', controllers.product.createPost);

	let product = Router()
		.get('/:catename', controllers.product.index)
		.get('/:catename/:typename', controllers.product.productBasedOnType);

	let activate = Router()
		.get('/announce', controllers.register.activateAnnounce)
		.get('/:userid', controllers.register.activate)

	let activateProcess = Router()
		.get('/:userid', controllers.register.activateSuccess);


	let user = Router()
		.get('/profile', controllers.user.profile)
		.get('/posts', controllers.user.posts)
		.post('/updateProfile', controllers.user.updateUser)
		.post('/posts/deletePost', controllers.product.deleteProduct)
		.get('/index', controllers.user.index);



	app.use('/product', product);
	app.use('/single', single);
	app.use('/createPost', createPost );
	app.use('/logIn', logIn);
	app.use('/register', register);
	app.use('/cart', cart);
	app.use('/user', user);
	app.use('/activate', activate);
	app.use('/activateProcess', activateProcess);
	app.use('/logOut', logOut);

	//staff

	let addDiscount = Router()
		.get('/', controllers.user.addDiscount)
		.post('/', controllers.user.addDiscountSave);

	let about = Router()
		.get('/', controllers.user.about);

	let contact = Router()
		.get('/', controllers.user.contact)
		.post('/', controllers.user.sendMessage);

	let homeAdmin = Router()
			.get('/', controllers.admin.index);
	let addStaff = Router()
			.get('/', controllers.admin.addStaff)
			.post('/', controllers.admin.createStaff);
	let staffList = Router()
			.get('/', controllers.admin.staffList);

	let homeStaff = Router()
		.get('/', controllers.staff.index);
	let customers = Router()
		.get('/', controllers.staff.customers);
	let userDetail = Router()
		.get('/:id', controllers.staff.userDetail)
		.post('/:id', controllers.staff.blockUser);
	let allPosts = Router()
		.get('/', controllers.staff.allPosts);
	let newPosts = Router()
		.get('/', controllers.staff.newPosts)
		.post('/', controllers.staff.checkPost);
	let postDetails = Router()
		.get('/:id', controllers.staff.postDetail)
		.post('/:id', controllers.staff.checkPost);
	let orders = Router()
		.get('/', controllers.staff.orders);
	let editProfile = Router()
		.get('/', controllers.staff.editProfile);

	let mailbox = Router()
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
