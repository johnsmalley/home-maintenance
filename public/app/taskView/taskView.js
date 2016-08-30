angular.module('maintenance.view', [])

.controller('ViewController', function($scope, $http, $route) {
  var date = new Date();
  $scope.currentDate = date.toISOString();
  var sevenDaysFuture = new Date(date.getTime() + 7*24*60*60*1000);
  $scope.sevenDaysFuture = sevenDaysFuture.toISOString();

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
    }).then(function() {
      $route.reload();
    })
  }
});