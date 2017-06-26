const User = require('../models/users.js');


const adminController = {
	index: function(req, res){
		let user = req.user;

			if (user == null) {
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
		else if(user.type===0){
			res.render('admin/homeAdmin',{
				layout: 'applicationAdmin',
				active_dashboard: 'active',
				tit: 'Admin Home',
				username: user.name,
			});
		}
		else if(user.type === 1){
			res.render('404',{
				layout: 'applicationStaff',
				username: user.name,
				eTitle: '401',
				Content: 'Authorization require',
				buttonLink:'/homeStaff',
				buttonValue:'Back to home'
			});
		}

	},

	addStaff: function(req, res){
		let user = req.user;
			if (user == null) {
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
		else if(user.type===0){
			res.render('admin/addStaff',{
				layout: 'applicationAdmin',
	      active_addstaff: 'active',
				active_staffmanagement: 'active',
				tit: 'Add Staff',
				username: user.name,
	    });
		}
		else if(user.type === 1){
			res.render('404',{
				layout: 'applicationStaff',
				username: user.name,
				eTitle: '401',
				Content: 'Authorization require',
				buttonLink:'/homeStaff',
				buttonValue:'Back to home'
				});
		}
	},

	createStaff: function(req, res){
			User.checkUser(req.body.email, function(err, result){
					if(err != null){
						res.end('0');
					}
					else{
						if(result.length == 0){
							User.addStaff(req.body.pass, req.body.email, req.body.name, req.body.phone, function(err, result){
								if(err!=null){
									res.end('0');
								}
								else{
									res.end('1');
								}
							});
						}
						else{
							res.end('-1');
						}
					}
				});
	},

	staffList: function(req, res){
		let user = req.user;
		if ((user == null) || (user.type == 2))
		{
			res.render('404',{
				eTitle: '401',
				Content: 'Authorization require',
				buttonLink:'/home',
				buttonValue:'Back to home'
				});
		}
		else if(user.type===0){
			User.findUserType(1, function(err, staffs){
				res.render('admin/staffList',{
					layout: 'applicationAdmin',
					active_staffmanagement: 'active',
					tit: 'Staff List',
					staffs: staffs,
					username: user.name,
		    });
			});
		}
		else if(user.type === 1){
			res.render('404',{
				layout: 'applicationStaff',
				username: user.name,
				eTitle: '401',
				Content: 'Authorization require',
				buttonLink:'/homeStaff',
				buttonValue:'Back to home'
				});
		}

	}

};

module.exports = adminController;
