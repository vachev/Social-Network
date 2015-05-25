app.controller('NavigationController', function ($scope, authService, $route) {
    $scope.userLogout = authService.logout();
});