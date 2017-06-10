const bodyParser = require('body-parser');
const controllers = require('../app/controllers');

module.exports = function(app) {
	app.get('/home', controllers.home.index);

	app.get('/logIn', controllers.logIn.index);
	app.get('/register', controllers.register.index);

	app.get('/homeAdmin', controllers.admin.index);
	app.get('/addStaff', controllers.admin.addStaff);
	app.get('/staffList', controllers.admin.staffList);
	app.get('/staffDetail', controllers.admin.staffDetail);

	app.get('/homeStaff', controllers.staff.index);
	app.get('/customers', controllers.staff.customers);

};
