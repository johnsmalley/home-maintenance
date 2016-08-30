angular.module('maintenance.create', [])

.controller('CreateControllers', function($scope, $http) {
  $scope.addTask = function () {
    console.log('about to add a task: ', $scope.task);
    return $http({
      method: 'POST',
      url: '/api/tasks',
      headers: {'Content-Type': 'application/JSON'},
      data: JSON.stringify($scope.task)
    })
  }
})