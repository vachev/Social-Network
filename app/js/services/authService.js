app.factory('authService', function ($http, baseServiceUrl, $route, $location, Notification) {

    function logout() {
        var logoutUrl = baseServiceUrl + '/api/users/logout';
        var authToken = localStorage['Authorization'];

        return $http.post(logoutUrl, null, {
            headers: {
                'Authorization': authToken
            }
        }).success(function () {
            localStorage.clear();
            $location.path("/");
            $route.reload();
            Notification.success("You have logged out!");
        }).error(function (err) {
            Notification.error(err.message);
        });
    }

    function login(username, password) {
        var loginServiceUrl = baseServiceUrl + '/api/users/login';
        var data = {
            username: username,
            password: password
        };

        $http.post(loginServiceUrl, data).success(function (data) {
            localStorage['Authorization'] = 'Bearer ' + data['access_token'];
            localStorage['username'] = data['userName'];
            Notification.success("You have logged in!");
            $route.reload();
        }).error(function (err) {
            Notification.error(err.error_description);
        });
    }

    function register(username, password, confirmPassword, name, email, gender) {
        var registerServiceUrl = baseServiceUrl + '/api/users/register';
        var data = {
            username: username,
            password: password,
            confirmPassword: confirmPassword,
            name: name,
            email: email,
            gender: gender
        };
        return $http.post(registerServiceUrl, data).success(function (data) {
            localStorage['Authorization'] = 'Bearer ' + data['access_token'];
            localStorage['username'] = data['userName'];
            $route.reload();
            Notification.success("Registration success!");
        }).error(function (err) {
            Notification.error(err.message);
        });
    }

    function isLoggedIn() {
        if (localStorage['Authorization']) {
            return true;
        } else {
            return false;
        }
    }

    return {
        login: login,
        register: register,
        logout: logout,
        isLoggedIn: isLoggedIn
    };
});