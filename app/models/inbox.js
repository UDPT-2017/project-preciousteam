const pool = require('./connect');

const inbox = {
	getAllInbox: function(callback){
		pool.query("select * from inbox order by messageid desc", function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				// console.log(res.rows);
				callback(null, res.rows);
			}
		});
	},

	readmail: function(messageid, callback){
		pool.query("update inbox set isreaded = true where messageid = $1::int", [messageid], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},

	sendMessage: function(email, subject, message, callback){
		pool.query("insert into inbox values (default, $1::text, $2::text, $3::text, now(), false)", [email, subject, message],
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

module.exports = inbox;
