app.controller('HomeController', function ($scope, authService, userService) {
    $scope.isLogged = authService.isLoggedIn();
});