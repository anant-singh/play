var app = angular.module('ArkPlay', ['apForm']).
    config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    },
    ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/signup', {
                controller: SignupCtrl
            });
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix("#!");
    }]
);