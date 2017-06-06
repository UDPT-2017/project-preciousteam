module.exports = function(app){
	require('./views')(app);
	require('./middlewares')(app);
	require('./routes')(app);
}