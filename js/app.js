'use strict';

var adminApp = angular.module('adminApp', ['ui.router']);

adminApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
        .state('state1', {
            url: "/state1",
            controller: 'AdminListCtrl',
            templateUrl: "js/partials/items-full-display.html"
        })
        .state('state2', {
            url: "/state2",
            controller:'AdminListCtrl',
            templateUrl: "js/partials/items-part-display.html"
        });
});



adminApp.controller('AdminListCtrl', function($scope) {
    $scope.users = [
        {name: 'John',age:20},{name: 'Ben',age:15},{name: 'Robert',age:15},{name: 'Dan',age:25},{name: 'Dan',age:30}
    ];
});

/**
adminApp.filter('reduceByName', function () {
    return reduceBy(items,'name',choosen.name);
});

function reduceBy(items,key,value) {
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
        if(value===items[i][key]){
            filtered.push(items[i]);
        }
    }
    return filtered;
};
 */