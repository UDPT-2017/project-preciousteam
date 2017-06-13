const adminController = {
	index: function(req, res){
		res.render('admin/homeAdmin',{
			layout: 'applicationAdmin',
			active_dashboard: 'active'
		});
	},

	addStaff: function(req, res){
		res.render('admin/addStaff',{
			layout: 'applicationAdmin',
      active_addstaff: 'active',
			active_staffmanagement: 'active'
    });
	},

	staffList: function(req, res){
		res.render('admin/staffList',{
			layout: 'applicationAdmin',
      active_stafflist: 'active',
			active_staffmanagement: 'active'
    });
	},

	staffDetail: function(req, res){
		res.render('admin/staffDetail',{
			layout: 'applicationAdmin',
			active_staffmanagement: 'active'
    });
	}

};

module.exports = adminController;
