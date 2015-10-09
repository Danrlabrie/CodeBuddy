var app = angular.module('sliderCodyApp', ['ui.slider']);
		
		app.controller('sliderCodyCtrl', function($scope, $log) {
			
			
			// Slider options with event handlers
			$scope.slider = {
				'options': {
					start: function (event, ui) { $log.info('Event: Slider start - set with slider options', event); },
    			stop: function (event, ui) { $log.info('Event: Slider stop - set with slider options', event); }
				}
			}
    
			$scope.thePitch=0.25;
			$scope.theSpeed=0.8;

		});