'use strict';

angular.
  module('AngularJSApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider: angular.ILocationProvider,
      $routeProvider: angular.route.IRouteProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/students', {
          template: '<student-list></student-list>'
        }).
        when('/students/:id/:firstName', {
          template: '<student-detail></student-detail>'
        }).
        otherwise('/students');
    }
  ]);