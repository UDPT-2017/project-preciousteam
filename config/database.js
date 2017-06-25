const config = {
  database: 'ProductSaleDB',
  user: 'postgres',
  password: 'thangcan9a5',
  port: 5432,
  max: 10, //set pool max size to 20
  idleTimeoutMillis: 1000 //close idle clients after 1 second
};

module.exports = config;