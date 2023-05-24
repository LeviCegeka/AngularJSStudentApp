'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('studentDetail').
  component('studentDetail', {
    templateUrl: 'student-detail/student-detail.template.html',
    controller: ['$routeParams', 'Phone',
      function StudentDetailController($routeParams, Phone) {
        var self = this;
        console.log($routeParams);
        self.phone = $routeParams;
        // self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        //   self.setImage(phone.images[0]);
        // });

        // self.setImage = function setImage(imageUrl) {
        //   self.mainImageUrl = imageUrl;
        // };
      }
    ]
  });
