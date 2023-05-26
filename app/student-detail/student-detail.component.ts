'use strict';
// old code
// angular.
//   module('studentDetail').
//   component('studentDetail', {
//     templateUrl: 'student-detail/student-detail.template.html',
//     controller: ['$routeParams', 'Student',
//       function StudentDetailController($routeParams) {
//         var self = this;
//         self.student = $routeParams;
//       }
//     ]
//   });

  class StudentDetailController {
    student: any;
    mainImageUrl: string;
  
    static $inject = ['$routeParams', 'Phone'];
    constructor($routeParams: angular.route.IRouteParamsService) {
      this.student = $routeParams
    }
  
  }
  
  angular.
    module('studentDetail').
    component('studentDetail', {
      templateUrl: 'student-detail/student-detail.template.html',
      controller: StudentDetailController
    });
