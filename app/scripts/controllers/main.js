'use strict';

angular.module('ecommerceSiteApp')
  .controller('MainCtrl', function ($scope, $rootScope, $http) {
    document.getElementById("container").style.width = window.innerWidth + "px";

    $http.get('http://interviews-env-1.b8amvayt6w.eu-west-1.elasticbeanstalk.com/products')
  	.then(function(response){
  		console.log(response.data);
  		$scope.dataCommerce = response.data;
  		$scope.dataCommerce.forEach(function(singleProduct) {
	      if(singleProduct.price.to_discount !== 0){
	      	console.log(singleProduct, "");
	      }
	    });
  	});
    
    
  });

