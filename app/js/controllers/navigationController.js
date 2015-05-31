app.controller('NavigationController', function ($scope, authService, userService, defaultProfilePic, $route, $location) {
    $scope.logoutUser = function () {
        authService.logout();
        $location.path("/");
        $route.reload();
    };
    userService.getDataAboutMe().success(
        function (data) {
            $scope.name = data.name;
            $scope.username = data.username;
            $scope.profilePic = data.profileImageData;
        }
    ).error(function () {
            localStorage.clear();
            $route.reload();
        });

    userService.getFriendRequests()
        .success(
        function (data) {
            $scope.requestCount = data.length;
            $scope.requests = data;
        }
    );

    $scope.search = function () {
        var keywords = $scope.keywords;

        userService.getFriendsByName(keywords)
            .success(function (data) {
                $scope.results = data;
            })
    };

    $scope.approveRequest = function (requestId) {
        userService.approveRequest(requestId)
            .success(function () {
                $scope.friendRequestClicked = false;
                $route.reload();
            })
    };

    $scope.declineRequest = function (requestId) {
        userService.declineRequest(requestId)
            .success(function () {
                $scope.friendRequestClicked = false;
                $route.reload()
            })
    };

    $scope.closeBar = function () {
        $scope.friendRequestClicked = false;
    };

    $scope.friendRequestClicked = false;
    $scope.defaultProfilePic = defaultProfilePic;
});