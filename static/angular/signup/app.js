angular.module('signupApp', []).
    config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }
);

function SignupCtrl($scope, $http) {
    $scope.data = {};
    $scope.submit = function() {
        $http.post('')
    };
};
