app.controller('RegisterController', function ($scope, authService, $location) {
    $scope.register = function () {
        var username = $scope.regUsername;
        var password = $scope.regPassword;
        var confPassword = $scope.regConfPassword;
        var name = $scope.regName;
        var email = $scope.regEmail;
        var gender = $scope.regGender;

        authService.register(username, password, confPassword, name, email, gender)
    }
});