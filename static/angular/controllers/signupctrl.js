angular.module("ArkPlay").controller('SignupCtrl', function($scope, $http) {
    $scope.signupData = {};
    $scope.list = {}
    $scope.submit = function() {
        $http.post('/signup', $scope.signupData).
            success(function(data) {
                $scope.list = data.form;
            });
    };
});