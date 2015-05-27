var app = angular.module('SocialNetwork', ['ngRoute', 'naif.base64', 'angular-loading-bar', 'ui-notification']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
app.constant('defaultProfilePic', 'data:image/jpg;base64,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');

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

    $routeProvider.otherwise(
       { redirectTo: '/' }
    );
});