var pg = require('pg');
var config = require('../../config/database');
var parse = require('pg-connection-string').parse;

if (process.env.DATABASE_URL) {
	config = parse(process.env.DATABASE_URL);
}

var pool = new pg.Pool(config);

module.exports = pool;

