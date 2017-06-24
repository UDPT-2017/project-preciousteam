const pool = require('./connect');

const posts = {
	findOldPost: function(callback){
		pool.query("select  pr.productID, pr.name as prname, pr.description, pr.price, pr.quantity, u_s.name as usname, pt.typeName, pr.time, b.brandName, u_e.name as uename, pic.picID "
		+" from product pr, picture pic, users u_s, users u_e, producttype pt, brand b "
    +" where pr.salesman = u_s.userID and pr.employee = u_e.userID "
    +" and pr.producttype = pt.typeID and pr.brand = b.brandID "
    +" and pic.picID in (select pic1.picID from picture pic1 where pic1.productID = pr.productID  limit 1) "
    +" order by pr.productID desc", function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				// console.log(res.rows);
				callback(null, res.rows);
			}
		});
	},

	findNewPost: function(callback){
		pool.query("select  pr.productID, pr.name as prname, pr.description, pr.price, pr.quantity, u.name as uname, pt.typeName, pr.time, b.brandName, pic.picID"
		+" from product pr, picture pic, users u, producttype pt, brand b "
    +" where pr.employee is null and pr.salesman = u.userID "
    +" and pr.producttype = pt.typeID and pr.brand = b.brandID "
                +" and pic.picID in (select pic1.picID from picture pic1 where pic1.productID = pr.productID  limit 1)"
                +"order by pr.productID desc", function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				// console.log(res.rows);
				callback(null, res.rows);
			}
		});
	},

	findPicPost: function(productID, callback){
		pool.query("select * from picture where productID = $1::int", [productID], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},

	check: function(productID, callback){
		pool.query("select employee from product where productID = $1::int", [productID], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},

	getPost: function(productID, callback){
		pool.query("select  pr.productID, pr.name as prname, pr.description, pr.price, pr.quantity, u.name as uname, pt.typeName, pr.time, b.brandName, pic.picID"
		+" from product pr, picture pic, users u, producttype pt, brand b "
    +" where pr.employee is null and pr.salesman = u.userID and pr.producttype = pt.typeID "
		+" and pr.brand = b.brandID and pr.productID = $1::int", [productID], function(err, res){
			if (err != null){
				console.log(err);
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},
	getPostChecked: function(productID, callback){
		pool.query("select  pr.productID, pr.name as prname, pr.description, pr.price, pr.quantity, u.name as uname, ue.name as ename, pt.typeName, pr.time, b.brandName, pic.picID"
		+" from product pr, picture pic, users u, users ue, producttype pt, brand b "
    +" where pr.salesman = u.userID and pr.employee = ue.userID and pr.producttype = pt.typeID "
		+" and pr.brand = b.brandID and pr.productID = $1::int", [productID], function(err, res){
			if (err != null){
				callback(err, null);
			}
			else {
				callback(null, res.rows);
			}
		});
	},

	findOrder: function(callback){
		pool.query("select cart.customerID, users.name as uname, cart.productID, product.name as pname, cart.quantity from cart, users, product "
							+" where cart.customerID = users.userID and cart.productID = product.productID and cart.isPaid = true", function(err, res){
			if(err != null){
				callback(err, null);
			}
			else{
				callback(null, res.rows);
			}
		});
	},

	checkPost: function(productID, employee, btn, callback){
		// console.log("do check posst models" + productID);
		// console.log("do check posst models" + employee);
		// console.log("do check posst models" + btn);
				if(btn=='true'){
					pool.query("update product set employee = $1::int where productID = $2::int",[employee, productID], function(err, res){
						if(err != null){
							console.log(err);
							callback(err, null);
						}
						else{
							callback(null, res.rows);
						}
					});
				}
				else{
					pool.query("delete from picture where productID = $1::int", [productID], function(err1, res1){
						if(err1 != null){
							callback(err1, null);
						}
						else{
								pool.query("delete from product where productID = $1::int",[productID], function(err, res){
									if(err != null){
										callback(err, null);
									}
									else{
										callback(null, res.rows);
									}
								});
						}
					});
				}

		},
}

module.exports = posts;
