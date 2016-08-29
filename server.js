var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello world');
})

var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log("Server listening on port: ", port);
});



