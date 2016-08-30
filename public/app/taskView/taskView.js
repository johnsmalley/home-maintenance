angular.module('maintenance.view', [])

.controller('ViewController', function($scope, $http) {
  var getTasks = function() {
    $http({
      method: 'GET',
      url: '/api/tasks'
    })
    .then(function(response) {
      console.log('response:', response)
      $scope.tasks = response.data;
    })
  }();

  $scope.deleteTask = function(task) {
    $http({
      method: 'DELETE',
      url: '/api/tasks',
      headers: {'Content-Type': 'application/JSON'},
      data: JSON.stringify(task)
    })
    console.log('in delete task');
    console.log('deleteTask id: ', task._id);
  }
});