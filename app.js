
var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});