angular.module('maintenance.create', [])

.controller('CreateController', function($scope, $http) {
  $scope.addTask = function () {
    $http({
      method: 'POST',
      url: '/api/tasks',
      headers: {'Content-Type': 'application/JSON'},
      data: JSON.stringify($scope.task)
    })
    $scope.task = null;
  }
})