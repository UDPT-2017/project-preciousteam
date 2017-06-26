const User = require('../models/users.js');
const Post = require('../models/posts.js');
const Inbox = require('../models/inbox.js');
//////------------------------------/////


var layout = "applicationStaff";
//////------------------------------/////

const staffController = {
		index: function(req, res){
			let user = req.user;

			if (user == undefined) {
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if (user.type == 2)
			{
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if(user.type === 0)  //là admin
				layout = "applicationAdmin";
			if(user.type==='1' || user.type===0){
				res.render('staff/homeStaff',{
					layout: 'applicationStaff',
					active_dashboard: 'active',
					tit: 'Staff Home',
					username: user.name,
				});
		}

	},

	customers: function(req, res){
		let user = req.user;
			if (user == undefined) {
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if (user.type == 2)
			{
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if(user.type === 0)  //là admin
				layout = "applicationAdmin";
			if(user.type===1 || user.type===0){
			User.findUserType(2, function(err, customers){
				res.render('staff/customers',{
					layout: layout,
				  active_customermanagement: 'active',
					tit: 'Customers List',
					username: user.name,
					customers: customers,
				});
			});
		}
	},

	userDetail: function(req, res){
		let user = req.user;
			if (user == undefined) {
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if (user.type == 2)
			{
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if(user.type === 0)  //là admin
				layout = "applicationAdmin";
		if(user.type==='1' || user.type===0){
				User.findUserID(req.params.id, function(err, usersDt){
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
						userid: usersDt[0].userid,
						name: usersDt[0].name,
						email: usersDt[0].email,
						phone: usersDt[0].phone,
						avatar_user: usersDt[0].profilepic,
					});
				});
			}
	},
	allPosts: function(req, res){
		let user = req.user;
			if (user == undefined) {
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if (user.type == 2)
			{
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
		else if(user.type === 0)  //là admin
				layout = "applicationAdmin";
		if(user.type===1 || user.type===0){
			Post.findOldPost(function(err, posts){
				Post.findNewPost(function(err, newposts) {
					res.render('staff/allPosts',{
						layout: layout,
						active_postmanagement: 'active',
						tit: 'All Posts',
						username: user.name,
						newposts: newposts,
						posts: posts,
					});
				});
			});
		}
	},

	newPosts: function(req, res){
		let user = req.user;
			if (user == undefined) {
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if (user.type == 2)
			{
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
		else if(user.type === 0)  //là admin
				layout = "applicationAdmin";
		if(user.type===1 || user.type===0){
			Post.findNewPost(function(err, posts){
				res.render('staff/uncheckPosts',{
					layout: layout,
					active_postmanagement: 'active',
					tit: 'New Posts',
					username: user.name,
					posts:posts,
				});
			});
		}
		},

	postDetail: function(req, res){
		let user = req.user;
			if (user == undefined) {
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if (user.type == 2)
			{
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if(user.type === 0)  //là admin
				layout = "applicationAdmin";
		if(user.type===1 || user.type===0){
				let visible = "hidden";
				Post.check(req.params.id, function(errc, rsc){
					if(rsc[0].state == 0){
						visible = "visible";
						Post.getPost(req.params.id, function(err, post){
							Post.findPicPost(req.params.id, function(err, pics){
								res.render('staff/postDetails',{
									layout: layout,
									active_postmanagement: 'active',
									tit: 'Post Details',
									username: user.name,
									post: post[0],
									pics: pics,
									visible: visible
								});
							});
						});
					}
					else {
						Post.getPostChecked(req.params.id, function(err, post){
							Post.findPicPost(req.params.id, function(err, pics){
								res.render('staff/postDetails',{
									layout: layout,
									active_postmanagement: 'active',
									tit: 'Post Details',
									username: user.name,
									post: post[0],
									pics: pics,
									visible: visible
								});
							});
						});
					}
				});
			}
	},

	editProfile: function(req, res){
		let user = req.user;
			if (user == undefined) {
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if (user.type == 2)
			{
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if(user.type === 0)  //là admin
				layout = "applicationAdmin";
		if(user.type===1 || user.type===0){
			User.findUserID(user.userID, function(err, usersDt){
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
		}
		else {
			res.render('404',{
				eTitle: '401',
				Content: 'Authorization require',
				buttonLink:'/home',
				buttonValue:'Back to home'
				});
		}
	},

 orders: function(req, res){
 	let user = req.user;
			if (user == undefined) {
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if (user.type == 2)
			{
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if(user.type === 0)  //là admin
				layout = "applicationAdmin";
	 if(user.type===1 || user.type===0){
		 Post.findOrder(function(err, orders){
			 res.render('staff/orders',{
				 layout: layout,
				 username: user.name,
				 active_order:"active",
				 tit: "Orders",
				 orders: orders,
			 });
		 });
 	}
	else {
		res.render('404',{
			eTitle: '401',
			Content: 'Authorization require',
			buttonLink:'/home',
			buttonValue:'Back to home'
			});
	}
 },

	mailbox: function(req, res){
		let user = req.user;
			if (user == undefined) {
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if (user.type == 2)
			{
				res.render('404',{
					eTitle: '401',
					Content: 'Authorization require',
					buttonLink:'/home',
					buttonValue:'Back to home'
					});
			}
			else if(user.type === 0)  //là admin
				layout = "applicationAdmin";
		if(user.type===1 || user.type===0){
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
		else{
			res.render('404',{
				eTitle: '401',
				Content: 'Authorization require',
				buttonLink:'/home',
				buttonValue:'Back to home'
				});
		}
	},

	readmail: function(req, res){
		Inbox.readmail(req.body.messageid, function(err, result){

		});
	},

	blockUser: function(req, res){
		User.blockUser(req.params.id, function(err, result){
			if(err!=null){
				res.end('0');
			}
			else{
				res.end('1');
			}
		});
	},

	checkPost: function(req, res){
		Post.checkPost(req.body.productID, req.user.userID, req.body.btn, function(err, result){
			// console.log("do check posst controler" + req.body.productID);
			// console.log("do check posst controler" + req.body.userID);
			// console.log("do check posst controler" + req.body.btn);
			if(err!=null){
				res.end('0');
			}
			else{
				if(req.body.btn=='true')
					res.end('1');
				else
					res.end('2');
			}
		});
	}
};

module.exports = staffController;
