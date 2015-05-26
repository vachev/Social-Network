app.controller('SidebarController', function ($scope, authService, userService) {
    userService.getFriends()
        .success(
        function (data) {
            $scope.totalFriends = data.length;
        }
    );
});