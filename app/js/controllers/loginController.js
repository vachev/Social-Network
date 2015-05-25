app.controller('LoginController', function ($scope, authService, $route) {
    $scope.login = function () {
        var username = $scope.loginUsername;
        var password = $scope.loginPassword;

        authService.login(username, password);
    }
});