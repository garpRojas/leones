var leonesProfile = angular.module("LeonesProfile" , []);

leonesProfile.controller('CarouselController', function MyController($scope, $http){
	$scope.testing="next";
	$http.get('js/angular/players.json').then(function(response){
		$scope.players = response.data;
	});

	$scope.numJugador = 0;
	$scope.secondJugador = $scope.numJugador+1;
	$scope.thirdJugador = $scope.numJugador+2;
	$scope.upValeu = function(){
		
		if($scope.thirdJugador+1 === $scope.players.length){
			$scope.numJugador = $scope.secondJugador;
			$scope.secondJugador = $scope.thirdJugador;
			$scope.thirdJugador = 0;
		}else{
			$scope.numJugador = $scope.secondJugador;
			$scope.secondJugador = $scope.thirdJugador;
			$scope.thirdJugador ++;
		}
	}
	$scope.downValeu = function(){
		if($scope.thirdJugador === 2){
			$scope.thirdJugador = $scope.secondJugador;
			$scope.secondJugador = $scope.numJugador;
			$scope.numJugador = $scope.players.length-1;
		}else{
			$scope.thirdJugador = $scope.secondJugador;
			$scope.secondJugador = $scope.numJugador;
			$scope.numJugador --;
		}
	}

});

leonesProfile.controller('GalleryController', function MyController($scope, $http){

	$http.get('js/angular/gallery.json').then(function(response){
		$scope.gallery = response.data;
	});
});

leonesProfile.controller('LeagueController', function MyController($scope, $http){

	$http.get('js/angular/league.json').then(function(response){
		$scope.league = response.data;
	});
});