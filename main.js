//tránh trường hợp quên khai báo biến, chg trình tự tạo biến global
"use strict";
const express = require('express');
const app = express();
const config = require('./config');

config(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
