angular.module('oscar')
	.controller('homeController', function($scope, $location, $timeout, photoFactory){
		photoFactory.getPhotos(function(data){
			$scope.photos = data
		})
})