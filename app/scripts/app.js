'use strict';

angular
  .module('ecommerceSiteApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngSanitize',
    'ngTouch'
  ]);
'use strict';
var omniturePageName = 'Create Smart Lop';

angular.module('smartlop', ['ngRoute', 'ecommerceSiteApp.resources'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/men_shoes', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function ($scope, $rootScope, GetApi) {

    $rootScope.promiseList = {};
    $rootScope.promiseList.dataCommerce = GetApi.all(function (data) {
      $rootScope.dataCommerce = data;
    }).$promise;

    console.log($rootScope.promiseList);
  });
