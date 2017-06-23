const User = require('../models/users.js');

let user = {
	email: 'phuongthanh@gmail.com',
	name: 'Phương Thanh',
	phone: '0123547863',
	state: '1'
};

const adminController = {
	index: function(req, res){
		res.render('admin/homeAdmin',{
			layout: 'applicationAdmin',
			active_dashboard: 'active',
			tit: 'Admin Home',
			username: user.name,
		});
	},

	addStaff: function(req, res){
		res.render('admin/addStaff',{
			layout: 'applicationAdmin',
      active_addstaff: 'active',
			active_staffmanagement: 'active',
			tit: 'Add Staff',
			username: user.name,
    });
	},

	staffList: function(req, res){
		User.findUserType(1, function(err, staffs){
			res.render('admin/staffList',{
				layout: 'applicationAdmin',
				active_staffmanagement: 'active',
				tit: 'Staff List',
				staffs: staffs,
				username: user.name,
	    });
		});
	},

};

module.exports = adminController;
