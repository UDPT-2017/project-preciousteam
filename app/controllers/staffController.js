const User = require('../models/users.js');
const Post = require('../models/posts.js');
const Inbox = require('../models/inbox.js');
//////------------------------------/////
var user = {
	userID: 1,
	email: 'phuongthanh@gmail.com',
	name: 'Phương Thanh',
	phone: '0123547863',
	type: '0',
	state: '1',
};

var layout = "applicationStaff";
if(user.type == 0)  //là admin
	layout = "applicationAdmin";
//////------------------------------/////

const staffController = {
	index: function(req, res){
		res.render('staff/homeStaff',{
			layout: 'applicationStaff',
			active_dashboard: 'active',
			tit: 'Staff Home',
			username: user.name,
		});
	},

	customers: function(req, res){
		User.findUserType(2, function(err, customers){
			res.render('staff/customers',{
				layout: layout,
			  active_customermanagement: 'active',
				tit: 'Customers List',
				username: user.name,
				customers: customers,
			});
		});
	},

	userDetail: function(req, res){
		User.findUser(req.params.id, function(err, usersDt){
			let usertype = 'Customer';
			let atv = new Array('active','');
			if(usersDt[0].type==1){
				usertype = 'Staff';
				atv = new Array('', 'active');
			}
			res.render('staff/userDetail',{
				layout: layout,
			  active_customermanagement: atv[0],
				active_staffmanagement: atv[1],
				username: user.name,
				tit: usertype + ' Details',
				usertype: usertype,
				name: usersDt[0].name,
				email: usersDt[0].email,
				phone: usersDt[0].phone,
				avatar_user: usersDt[0].profilepic,
			});
		});
	},
	allPosts: function(req, res){
		Post.findOldPost(function(err, posts){
			Post.findNewPost(function(err, newposts) {
				res.render('staff/allPosts',{
					layout: layout,
					active_postmanagement: 'active',
					tit: 'All Posts',
					username: user.name,
					newposts: newposts,
					posts:posts,
				});
			});
		});
	},

	newPosts: function(req, res){
		Post.findNewPost(function(err, posts){
			res.render('staff/uncheckPosts',{
				layout: layout,
				active_postmanagement: 'active',
				tit: 'New Posts',
				username: user.name,
				posts:posts,
			});
		});
	},

	postDetail: function(req, res){
		Post.getPost(req.params.id, function(err, post){
			Post.findPicPost(req.params.id, function(err, pics){
				res.render('staff/postDetails',{
					layout: layout,
					active_postmanagement: 'active',
					tit: 'Post Details',
					username: user.name,
					post: post[0],
					pics: pics
				});
			});
		});
	},

	editProfile: function(req, res){
		User.findUser(user.userID, function(err, usersDt){
			res.render('staff/editProfile',{
				layout: layout,
				username: user.name,
				tit: "Edit Profile",
				name: usersDt[0].name,
				email: usersDt[0].email,
				phone: usersDt[0].phone,
				avatar_user: usersDt[0].profilepic,
			});
		});
	},

 orders: function(req, res){
	 Post.findOrder(function(err, orders){
		 res.render('staff/orders',{
			 layout: layout,
			 username: user.name,
			 tit: "Orders",
			 orders: orders,
		 });
	 });
 },

	mailbox: function(req, res){
		Inbox.getAllInbox(function(err, mails){
			res.render('staff/mailbox', {
				layout: layout,
				active_mail: 'active',
				tit: 'Mailbox',
				username: user.name,
				mails:mails,
			});
		});
	}
};

module.exports = staffController;
