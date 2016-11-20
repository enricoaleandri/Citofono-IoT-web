/**
 * Created by enricoaleandri on 03/10/16.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('CitofonoIot', [
    'ngRoute',
    'CitofonoIot.service',
    'CitofonoIot.pages'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/mobile'});
}]);