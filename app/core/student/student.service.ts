'use strict';

  angular.
  module('core.student').
  factory('Student', ['$resource',
    ($resource: angular.resource.IResourceService) =>
      $resource('students/:id.json', {}, {
        query: {
          method: 'GET',
          params: {id: 'students'},
          isArray: true
        }
      })
  ]);