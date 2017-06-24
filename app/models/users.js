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

	findUserType: function(type, callback){
		pool.query("select userID, email, name, phone, state from users where type = $1::int", [type], function(err, res){
			if(err != null)
				callback(err, null);
				else{
					// 	console.log(res.rows);
					callback(null, res.rows);
				}
		});
	},

	addStaff: function(pass, email, name, phone,callback){
		pool.query("insert into users values (default, $1::text, $2::text, $3::text, $4::text,'User.png', 1, 1)", [pass, email, name, phone],
			function(err, res){
				if(err != null)
					callback(err, null);
					else{
						callback(null, res.rows);
					}
			});
	},

	blockUser: function(userID, callback){
		pool.query("update users set state = 0 where userID = $1::int", [userID], function(err, res){
				if(err != null){
					console.log(userID);
					callback(err, null);
				}
				else{
					callback(null, res.rows);
				}
		});
	}
}

module.exports = User;
