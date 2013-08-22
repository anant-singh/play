angular.module("ArkPlay").controller('SignupCtrl', function($scope, $http) {
    $scope.form = {};
    $scope.list = {}
    $scope.submit = function() {
        $http.post('/signup', $scope.form).
            success(function(data) {
                $scope.list = data.form;
            });
    };
});