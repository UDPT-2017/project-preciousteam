const bodyParser = require('body-parser');
const controllers = require('../app/controllers');

module.exports = function(app) {
	app.get('/home', controllers.home.index);

	app.get('/logIn', controllers.logIn.index);
	app.get('/register', controllers.register.index);
};