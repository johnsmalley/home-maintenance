var Task = require('./taskModel.js');
var Q = require('q');

var findAllTasks = Q.nbind(Task.find, Task);

module.exports = {
  createTask: function (req, res, next) {
    var title = req.body.title;
    var equipment = req.body.equipment;
    var description = req.body.description;
    var due = req.body.due

    Task.create({
      title: title,
      equipment: equipment,
      description: description,
      due: due
    }, function (error, task) {
      if (error) {
        throw error;
      } else {
        res.send(task);
      }
    })
  },

  viewTasks: function (req, res, next) {
    findAllTasks({})
      .then(function(tasks) {
        res.json(tasks)
      })
      .fail(function (error) {
        console.log('failed to find all tasks');
        next(error);
      })
  }
};