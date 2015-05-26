app.factory('passwordService', function ($http, baseServiceUrl, notifyService, $route) {

    function changePassword(oldPass, newPass, confPass) {
        var passwordServiceUrl = baseServiceUrl + '/api/me/changepassword';
        var authToken = localStorage['Authorization'];
        var data = {
            oldPassword: oldPass,
            newPassword: newPass,
            confirmPassword: confPass
        };

        return $http.put(passwordServiceUrl, data, {
            headers: {
                'Authorization' : authToken
            }
        }).success(function () {
            console.log('smenena');
        }).error(function () {
            console.log('greshka');
        });
    }

    return {
        changePassword: changePassword
    };
});