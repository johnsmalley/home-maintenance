angular.module('maintenance', [
  'maintenance.create',
  'ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/create', {
      templateUrl: 'app/taskCreate/taskCreate.html',

    });
});