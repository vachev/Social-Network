app.factory('userService', function ($http, baseServiceUrl, notifyService, $route) {

    function getDataAboutMe() {
        var aboutMeUrl = baseServiceUrl + '/api/me';
        var authToken = localStorage['Authorization'];

        return $http.get(aboutMeUrl, {
            headers: {
                'Authorization' : authToken
            }
        });
    }
    function getFriendRequests() {
        var aboutMeUrl = baseServiceUrl + '/api/me/requests';
        var authToken = localStorage['Authorization'];

        return $http.get(aboutMeUrl, {
            headers: {
                'Authorization' : authToken
            }
        });
    }
    function getFriends() {
        var aboutMeUrl = baseServiceUrl + '/api/me/friends';
        var authToken = localStorage['Authorization'];

        return $http.get(aboutMeUrl, {
            headers: {
                'Authorization' : authToken
            }
        });
    }

    return {
        getDataAboutMe: getDataAboutMe,
        getFriendRequests: getFriendRequests,
        getFriends: getFriends
    };
});