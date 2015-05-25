app.factory('authService', function ($http, baseServiceUrl, notifyService) {

    function logout() {
        var logoutUrl = baseServiceUrl + '/api/users/logout';
        var authToken = localStorage['Authorization'];

        return $http.post(logoutUrl, null, {
            headers: {
                'Authorization' : authToken
            }
        }).success(function () {
            localStorage.clear();
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
            console.log("You have logged in!");
        }).error(function () {
            console.log("error");
        });
    }

    function register(username, password, confirmPassword, name, email, gender) {
        var registerServiceUrl = baseServiceUrl + '/api/users/register';
        var data = {
            username: username,
            password: password,
            confirmPassword: confirmPassword,
            name: name,
            email: email
        };
        return $http.post(registerServiceUrl, data).success(function (data) {
            localStorage['Authorization'] = 'Bearer ' + data['access_token'];
            localStorage['username'] = data['userName'];
            localStorage['gender'] = gender;
            console.log('stana!');
        }).error(function (error) {
            console.log(error.message);
        });
    }

    function isLoggedIn() {
        if (localStorage['Authorization']) {
            return true;
        }
        return false;
    }

    function getCurrentUser() {
        // TODO
        console.error("Method not implemented yet.")
    }

    return {
        login: login,
        register: register,
        logout: logout,
        isLoggedIn: isLoggedIn,
        getCurrentUser: getCurrentUser
    };
});