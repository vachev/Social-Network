app.controller('SidebarFriendController', function ($scope, userService) {
    $scope.GetFriendsFriends = function () {
        userService.GetFriendsFriends().success(function (data) {
            $scope.friends = data;
        })
    }
});