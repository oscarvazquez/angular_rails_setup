angular.module('oscar')
	.factory('photoFactory', function($http){
	var factory = {};
	factory.addPhotos = function(info, callback){
		$http.get('/photos.json').success(function(data){
			callback(data);
		})
	}
	return factory;
})