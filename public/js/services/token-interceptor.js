angular.module('alurapic')
	   .factory('tokenInterceptor', function($window, $q, $location){

	   		var interceptor = {};
	   			//Amgular Documentation 
	   			interceptor.response = function(response){
	   					console.log(' Receiving answer from Server...Verifying wether has token or not');
	   					var token = response.headers('x-access-token');
	   						if(token){
	   							console.log('Storing Token: ' + token); 
	   							$window.sessionStorage.token = token;
	   						}

	   				return response;	  
	   			};


	   			interceptor.request = function(config){
	   				//Verifying wether has token or not
	   				config.headers = config.headers || {}; 
	   				if($window.sessionStorage.token){
	   					//put on headers
	   					config.headers['x-access-token'] = $window.sessionStorage.token;
	   					console.log('Add token on heder of the request to be sent to server...');
	   				}

	   				return config;

	   			};

	   			interceptor.responseError = function(rejection){
	   				if(rejection != null && rejection.status == 401){
	   					delete $window.sessionStorage.token;
	   					$location.path('/login');
	   				}

	   				return $q.reject(rejection);
	   			};


	   		return interceptor;

	   });