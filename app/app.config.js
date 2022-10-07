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
        otherwise('/login');
    }
  ]);
