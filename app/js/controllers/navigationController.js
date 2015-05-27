app.controller('NavigationController', function ($scope, authService, userService) {
    $scope.logoutUser = function () {
        authService.logout();
    };
        userService.getDataAboutMe().success(
            function (data) {
                $scope.name = data.name;
                $scope.profilePic = data.profileImageData;
            }
        );

    userService.getFriendRequests()
        .success(
        function (data) {
            $scope.requestCount = data.length;
        }
    );

    $scope.search = function() {
        var keywords = $scope.keywords;
        
        userService.getFriendsByName(keywords)
            .success(function (data) {
                $scope.results = data;
            })
    }
});