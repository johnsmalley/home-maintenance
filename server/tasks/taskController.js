var Task = require('./taskModel.js');

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
        console.log('created task: ', task);
      }
    })
  }
};