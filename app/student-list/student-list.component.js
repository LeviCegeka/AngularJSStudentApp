'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('studentList').
  component('studentList', {
    templateUrl: 'student-list/student-list.template.html',
    controller: ['Student',
      function StudentListController(Phone) {
        console.log(Phone);
        this.phones = Phone.query();
      }
    ]
  });
