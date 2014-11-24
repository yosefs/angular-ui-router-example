'use strict';

/* Controllers */

var adminApp = angular.module('adminApp', []);

adminApp.controller('AdminListCtrl', function($scope) {
    $scope.users = [
        {name: 'John',age:20},{name: 'Ben',age:15},{name: 'Dan',age:25}
    ];
});