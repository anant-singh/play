var app = angular.module('ArkPlay', ['apForm']).
    config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    },
    ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/signup', {
                controller: SignupCtrl
            });
    }]
);