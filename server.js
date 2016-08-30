var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var taskController = require('./server/tasks/taskController.js')
var app = express();

// connect to mongo database
mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost/tasks');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('Now connected to mongodb...');
})

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello world');
})

app.post('/api/tasks', taskController.createTask);
app.get('/api/tasks', taskController.viewTasks);
app.delete('/api/tasks', taskController.deleteTask);


var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log("Server listening on port: ", port);
});


