app.factory('passwordService', function ($http, baseServiceUrl, Notification) {

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
        }).success(function (data) {
            Notification.success(data.message);
        }).error(function (err) {
            Notification.error(err.message);
        });
    }

    return {
        changePassword: changePassword
    };
});