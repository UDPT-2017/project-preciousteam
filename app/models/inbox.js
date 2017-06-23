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
	getNewInbox: function(callback){
		pool.query("select * from inbox where isread = $1::boolean", [false], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				// console.log(res.rows);
				callback(null, res.rows);
			}
		});
	},

}

module.exports = inbox;
