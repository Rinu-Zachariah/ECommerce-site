'use strict';

angular.module('ecommerceSiteApp')
  .controller('MainCtrl', function ($scope, $rootScope, $http) {
    document.getElementById("container").style.width = window.innerWidth + "px";
    
    $http.get('http://interviews-env-1.b8amvayt6w.eu-west-1.elasticbeanstalk.com/products')
  	.then(function(response){
  		
  		$scope.productsList = response.data;
  		$scope.productsList.forEach(function(singleProduct) {
  			$scope.productsList.liked = false; //I am assigning this value as false. If the get api have details of specific user liked product, scope value will have that boolean value
	      if(singleProduct.price.to_discount !== 0){
	      	//logic for discounted value. Since I didn't find to_discount with some value, just writing the logic for the same
	      	//considering the to_discount value will be a number in percentage. So to_discount = 10
	      	//i have tested a scenarioa and have added the screenshot in github
	      	singleProduct.price.newValue = ((singleProduct.price.sell) - ((singleProduct.price.to_discount / 100)*(singleProduct.price.sell)));
	      }
	    });
  	});
  	$scope.searchData = function(value){
  		$http.get('http://interviews-env-1.b8amvayt6w.eu-west-1.elasticbeanstalk.com/products?search='+value)
	  	.then(function(response){
  			$scope.productsList = response.data;
	  	});
  	}

  	$scope.likedProduct = function(index){
  		$scope.productsList[index].liked = !$scope.productsList[index].liked;   //toggling feature
  		//after the feature toggle there will be a respective api call like "put" or "patch" to update the value in the api
  	}


    
    
  });

