'use strict';

class StudentListController {
  students: any[];
  query: string;

  static $inject = ['Student'];
  constructor(Student: any) {
    this.students = Student.query();
  }

}

angular.
  module('studentList').
  component('studentList', {
    templateUrl: 'student-list/student-list.template.html',
    controller: StudentListController
  });
  