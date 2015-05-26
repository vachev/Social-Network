var app = angular.module('SocialNetwork', ['ngRoute']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');

    app.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        });
        $routeProvider.when('/profile/password', {
            templateUrl: 'templates/change-password.html',
            controller: 'ChangePasswordController'
        });

    $routeProvider.otherwise(
       { redirectTo: '/' }
    );
    });