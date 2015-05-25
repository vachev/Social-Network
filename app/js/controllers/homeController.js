app.controller('HomeController', function ($scope, authService) {
        $scope.isLogged = authService.isLoggedIn();
    });