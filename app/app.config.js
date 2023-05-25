'use strict';

angular.
  module('AngularJSApp').
  config(['$routeProvider',
    function config($routeProvider) {
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
