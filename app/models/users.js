const pool = require('./connect');

const User = {
	findUser: function(userID, callback){
		pool.query("SELECT * FROM USERS WHERE userID = $1::int", [userID], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	getUser: function(email, password, callback){
		pool.query("SELECT * FROM USERS WHERE email = $1::text and pass = $2::text", [email, password], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	}
}

module.exports = User;
