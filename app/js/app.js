var app = angular.module('SocialNetwork', ['ngResource', 'ngRoute']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');

    app.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        });

    $routeProvider.otherwise(
       { redirectTo: '/' }
    );
    });