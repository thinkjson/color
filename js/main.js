'use strict';

var app = angular.module('color', []);
var MULTIPLIER = 50;

app.controller('MainController', ['$scope', function($scope) {
	$scope.swatches = [
		[255,0,0],
		[0,255,0],
		[0,0,255],
		[255,255,255],
		[102,102,102],
		[0,0,0]
	];

	$scope.randomize = function() {
		$scope.red = Math.floor(255 * Math.random());
		$scope.green = Math.floor(255 * Math.random());
		$scope.blue = Math.floor(255 * Math.random());
	}

	$scope.rgb2hex = function(red, green, blue) {
		var rgb = blue | (green << 8) | (red << 16);
    	return '#' + rgb.toString(16);
	}

	$scope.mix = function(red, green, blue) {
		$scope.red += Math.ceil((red-$scope.red)/MULTIPLIER);
		$scope.green += Math.ceil((green-$scope.green)/MULTIPLIER);
		$scope.blue += Math.ceil((blue-$scope.blue)/MULTIPLIER);
	};

	$scope.save = function() {
		$scope.swatches.push([
			$scope.red,
			$scope.green,
			$scope.blue
		]);
	}
}]);