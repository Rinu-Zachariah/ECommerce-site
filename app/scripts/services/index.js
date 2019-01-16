'use strict';
var resources = angular.module('ecommerceSiteApp.resources', ['ngResource']);

resources.config(function ($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.headers.options = {};
  $httpProvider.defaults.headers.options['Access-Control-Allow-Credentials'] = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

//reusable component to have cache
function cachedQuerying() {
  return {
    query: {
      method: 'GET',
      isArray: true,
      cache: true
    }
  };
}

//normal flow
resources.factory('GetApi', function ($resource) {
  return $resource('http://interviews-env-1.b8amvayt6w.eu-west-1.elasticbeanstalk.com/products', {}, {
    all: {
      method: 'GET',
      isArray: false,
      cache: true
    }
  });
});

resources.factory('SearchApi', function ($resource, API_ENDPOINT) {
  return $resource('http://interviews-env-1.b8amvayt6w.eu-west-1.elasticbeanstalk.com/products', {}, cachedQuerying());
});