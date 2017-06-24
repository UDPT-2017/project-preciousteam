const User = require('../models/users.js');

let user = {
	email: 'phuongthanh@gmail.com',
	name: 'Phương Thanh',
	phone: '0123547863',
	type:'0',
	state: '1'
};

const adminController = {
	index: function(req, res){
		if(user.type==='0'){
			res.render('admin/homeAdmin',{
				layout: 'applicationAdmin',
				active_dashboard: 'active',
				tit: 'Admin Home',
				username: user.name,
			});
		}
	},

	addStaff: function(req, res){
		if(user.type==='0'){
			res.render('admin/addStaff',{
				layout: 'applicationAdmin',
	      active_addstaff: 'active',
				active_staffmanagement: 'active',
				tit: 'Add Staff',
				username: user.name,
	    });
		}
	},

	createStaff: function(req, res){
		if(user.type==='0'){
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
		}
	},

	staffList: function(req, res){
		if(user.type==='0'){
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
	},

};

module.exports = adminController;
