app.factory('authService', function ($http, baseServiceUrl, notifyService, $route) {

    function logout() {
        var logoutUrl = baseServiceUrl + '/api/users/logout';
        var authToken = localStorage['Authorization'];

        return $http.post(logoutUrl, null, {
            headers: {
                'Authorization' : authToken
            }
        }).success(function () {
            localStorage.clear();
            $route.reload();
            console.log('izlezna');
        }).error(function () {
            console.log('greshka');
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
            localStorage['name'] = data['name'];
            console.log("You have logged in!");
            $route.reload();
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
            email: email,
            gender: gender
        };
        return $http.post(registerServiceUrl, data).success(function (data) {
            localStorage['Authorization'] = 'Bearer ' + data['access_token'];
            $route.reload();
            console.log('stana!');
        }).error(function (error) {
            console.log(error.message);
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