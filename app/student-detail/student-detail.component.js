'use strict';

angular.
  module('studentDetail').
  component('studentDetail', {
    templateUrl: 'student-detail/student-detail.template.html',
    controller: ['$routeParams', 'Student',
      function StudentDetailController($routeParams) {
        var self = this;
        self.student = $routeParams;
      }
    ]
  });
