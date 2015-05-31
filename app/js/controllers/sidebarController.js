app.controller('SidebarController', function ($scope, authService, userService, defaultProfilePic) {
    userService.getFriends()
        .success(
        function (data) {
            $scope.totalFriends = data.length;
            $scope.friends = data;
        }
    );
    $scope.defaultPic = defaultProfilePic;
    $scope.me = localStorage['username'];
});