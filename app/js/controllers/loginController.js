app.controller('LoginController', function ($scope, authService, Notification) {
    $scope.login = function () {
        var username = $scope.loginUsername;
        var password = $scope.loginPassword;

        authService.login(username, password).success(function () {
            Notification.success("You have logged in!");
        }).error(function (err) {
            Notification.error(err.message);
        });
    }
});