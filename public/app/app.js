angular.module('maintenance', [
  'maintenance.create',
  'maintenance.view',
  'ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/create', {
      templateUrl: 'app/taskCreate/taskCreate.html'
    })
    .when('/view', {
      templateUrl: 'app/taskView/taskView.html'
    })
    .otherwise({
      templateUrl: 'app/taskView/taskView.html'
    })
});