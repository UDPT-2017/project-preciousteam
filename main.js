//tránh trường hợp quên khai báo biến, chg trình tự tạo biến global
"use strict";
const express = require('express');
const app = express();
const config = require('./config');
const helpers = require('handlebars-helpers')();

config(app);

let port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
});
