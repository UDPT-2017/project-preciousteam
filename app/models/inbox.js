const pool = require('./connect');

const inbox = {
	getAllInbox: function(callback){
		pool.query("select * from inbox", function(err, res){
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
	}
}

module.exports = inbox;
