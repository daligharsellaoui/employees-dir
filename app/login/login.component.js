'use strict';

// Register `login` component, along with its associated controller and template
angular.module('login',[]).component('login', {
    templateUrl: 'login/login.component.html',
    controller:
        function ($scope, $rootScope) {
            $scope.clickMe = () => {
                if( $scope.username === 'admin' && $scope.password === 'pass' ) {
                    $rootScope.userName = $scope.username;
                    $rootScope.isAuthenticated = true;
                    window.location.href ='/#!/home';
                } else {
                    $scope.err = "Incorrect username/password !";
                }
            };
        }
});
