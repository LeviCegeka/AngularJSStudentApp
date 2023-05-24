'use strict';

angular.
  module('core.student').
  factory('Student', ['$resource',
    function($resource) {
      return $resource('students/:id.json', {}, {
        query: {
          method: 'GET',
          params: {id: 'students'},
          isArray: true
        }
      });
    }
  ]);
