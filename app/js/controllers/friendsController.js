app.controller('FriendsController', function ($scope, userService, $routeParams) {
    if ($routeParams.username == localStorage['username']) {
        userService.GetDetailedFriendsAboutMe().success(function (data) {
            $scope.friends = data;
        });
    } else {
        userService.GetDetailedFriends().success(function (data) {
            $scope.friends = data;
        });
    }

})
;