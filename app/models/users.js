const pool = require('./connect');

const User = {
	findUser: function(userID, state, callback){
		pool.query("SELECT * FROM USERS WHERE userID = $1::int and state = $2::int", [userID, state], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	getUser: function(email, password, state, callback){
		pool.query("SELECT * FROM USERS WHERE email = $1::text and pass = $2::text and state = $3::int", [email, password, state], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	checkUser: function(email, callback){
		pool.query("SELECT * FROM USERS WHERE email = $1::text", [email], function(err, res){
			if (err != null){
				console.log(err);
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	addUser: function(pass, email, name, phone, avatar, callback){
		const type = 2;
		const state = -2;
		pool.query("INSERT INTO USERS VALUES(default, $1::text, $2::text, $3::text, $4::text, $5::text, $6::int, $7::int)", [pass, email, name, phone, avatar, type, state], 
			function(err, res){
			if (err != null){
				console.log(err);
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	}
}

module.exports = User;
