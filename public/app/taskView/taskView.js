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
});