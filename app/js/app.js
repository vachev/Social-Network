var app = angular.module('SocialNetwork', ['ngRoute', 'naif.base64', 'angular-loading-bar', 'ui-notification']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
app.constant('defaultProfilePic', 'img/profile.png');
app.constant('defaultCoverPic', 'img/profile.png');

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/profile/password', {
        templateUrl: 'templates/change-password.html',
        controller: 'ChangePasswordController'
    });
    $routeProvider.when('/profile', {
        templateUrl: 'templates/edit-profile.html',
        controller: 'EditProfileController'
    });
    $routeProvider.when('/users/:username', {
        templateUrl: 'templates/user-wall.html',
        controller: 'UserWallController'
    });
    $routeProvider.when('/users/:username/friends', {
        templateUrl: 'templates/friends.html',
        controller: 'FriendsController'
    });
    $routeProvider.otherwise(
        {redirectTo: '/'}
    );
});