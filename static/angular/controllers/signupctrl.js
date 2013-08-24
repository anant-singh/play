angular.module("ArkPlay").controller('SignupCtrl', function($scope, $http) {
    $scope.apAccount = {};
    $scope.notification = "";
    $scope.showMsg = false;
    $scope.submit = function() {
        if ($scope.apAccount.email != $scope.apAccount.cnfEmail) {
            $scope.showMsg = true;
            $scope.notification = "Email does not match !!!";
        } else if ($scope.apAccount.password != $scope.apAccount.cnfPassword) {
            $scope.showMsg = true;
            $scope.notification = "Password does not match !!!";
        } else {
            $http.post('/signup', $scope.apAccount).
                success(function(data) {
                    if (data.accountCreated) {
                        $scope.apAccount = {};
                        $scope.showMsg = true;
                        $scope.notification = data.notification;
                    }
                });
        }
    };
});