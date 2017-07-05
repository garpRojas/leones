var leonesProfile = angular.module("LeonesProfile" , []);

leonesProfile.controller('CarouselControler', function MyController($scope, $http){

	$http.get('js/angular/players.json').then(function(response){
		$scope.player = response.data;
	});
	
});