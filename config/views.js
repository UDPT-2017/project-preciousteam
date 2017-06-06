const exphbs = require('express-handlebars');
const path = require('path');

module.exports = function (app) {
	app.engine('hbs', exphbs({
	extname: '.hbs',
	defaultLayout: 'application',
	layoutsDir: path.resolve('app/views/layouts'),
	partialsDir: path.resolve('app/views/partials'),

	}));

	app.set('view engine', 'hbs');
	//vì sẽ không tìm đc file views ngay cùng thư mục, nên phải cấu hình lại địa chỉ của file views để render
	app.set('views', path.resolve('./app/views'));

};