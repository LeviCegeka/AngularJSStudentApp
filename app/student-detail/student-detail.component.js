'use strict';

angular.
  module('studentDetail').
  component('studentDetail', {
    templateUrl: 'student-detail/student-detail.template.html',
    controller: ['$routeParams', 'Student',
      function StudentDetailController($routeParams, Student) {
        var self = this;
        console.log($routeParams);
        self.student = $routeParams;

      }
    ]
  });
