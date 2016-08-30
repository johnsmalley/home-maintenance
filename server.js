var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var create = require('./server/tasks/taskController.js')
var app = express();

// connect to mongo database
mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost/tasks');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('Now connected to mongodb...');
  create.createTask({
    body: {
      title: '1st task',
      equipment: 'washing machine',
      description: 'clean dryer tube',
      due: '11/22/2016'
    }
  })
})

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello world');
})

var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log("Server listening on port: ", port);
});


