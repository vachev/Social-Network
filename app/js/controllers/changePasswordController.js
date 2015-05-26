app.controller('ChangePasswordController', function ($scope, passwordService) {
    $scope.changePassword = function () {
        var oldPass = $scope.oldPass;
        var newPass = $scope.newPass;
        var confPass = $scope.confPass;

        passwordService.changePassword(oldPass, newPass, confPass);
    }
});