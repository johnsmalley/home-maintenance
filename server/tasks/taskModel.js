var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  title: String,
  equipment: String,
  description: String,
  due: Date,
  created: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Task', TaskSchema);