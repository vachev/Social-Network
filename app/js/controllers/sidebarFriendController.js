app.controller('SidebarFriendController', function ($scope, userService, defaultProfilePic) {
        userService.GetFriendsFriends().success(function (data) {
            $scope.friends = data;
        });
    $scope.defaultPic = defaultProfilePic;
});