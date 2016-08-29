var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log('req: ', req);
  console.log('res: ', res);
})