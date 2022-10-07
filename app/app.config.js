'use strict';

angular.
  module('EmployeeDirectory').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/login', {
          template: '<login></login>'
        }).
        when('/home', {
          template: '<people-directory></people-directory>'
        }).
        when('/under-construction' ,{
          template:'<under-construction></under-construction>'
      }).
        otherwise('/login');
    }
  ]);
