//////------------------------------/////
var user = 0;
var layout = "applicationStaff";
if(user === 0)  //là admin
	layout = "applicationAdmin";
//////------------------------------/////

const staffController = {
	index: function(req, res){
		res.render('staff/homeStaff',{
			layout: 'applicationStaff',
			active_dashboard: 'active'
		});
	},

	customers: function(req, res){
		res.render('staff/customers',{
			layout: layout,
		  active_customermanagement: 'active'
		});
	}
};

module.exports = staffController;
