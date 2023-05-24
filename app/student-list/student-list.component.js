'use strict';

angular.
  module('studentList').
  component('studentList', {
    templateUrl: 'student-list/student-list.template.html',
    controller: ['Student',
      function StudentListController(Student) {
        console.log(Student);
        this.students = Student.query();
      }
    ]
  });
