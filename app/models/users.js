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
	addUser: function(pass, email, name, phone, avatar, type, state, callback){
		//const type = 2;
		//const state = -2;
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
	},
	activate: function(uID, callback){
		pool.query("UPDATE USERS SET state = 1 WHERE userid = $1::int", [uID], function(err, res){
			if (err != null){
				console.log(err);
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	update: function(tel, pass, profilepic, userid, callback){
		if (profilepic != null)
		{
			pool.query("update users set (pass, phone, profilepic) = ($1::text, $2::text, $4::text) where userid = $3::int", [pass, tel, userid, profilepic],
			function(err, res){
				if (err != null){
					callback(err, null);
				}
				else {
					callback(null, res.rows);
				}
			})
		}
		else
		{
			pool.query("update users set (pass, phone) = ($1::text, $2::text) where userid = $3::int", [pass, tel, userid],
			function(err, res){
				if (err != null){
					callback(err, null);
				}
				else {
					callback(null, res.rows);
				}
			})
		}
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
