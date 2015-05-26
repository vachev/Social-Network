app.controller('NavigationController', function ($scope, authService, userService) {
    $scope.logoutUser = function () {
        authService.logout();
    };
        userService.getDataAboutMe().success(
            function (data) {
                $scope.name = data.name;
            }
        );

    userService.getFriendRequests()
        .success(
        function (data) {
            $scope.requestCount = data.length;
        }
    );
});