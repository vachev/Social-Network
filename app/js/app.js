var app = angular.module('SocialNetwork', ['ngResource', 'ngRoute']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');

    app.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/welcome.html'
        });
        $routeProvider.when('/', {
            templateUrl: 'templates/user-homescreen.html'
        });

    $routeProvider.otherwise(
       { redirectTo: '/' }
    );
    });