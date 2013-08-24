angular.module("ArkPlay").controller('SignupCtrl', function($scope, $http) {
    $scope.apAccount = {};
    $scope.submit = function() {
        $http.post('/signup', $scope.apAccount).
            success(function(data) {
                if (data.accountCreated) {
                    $scope.showMsg = data.accountCreated;
                    $scope.notification = "Account Created Successfully.";
                }
            });
    };
});