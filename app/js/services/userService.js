app.factory('userService', function ($http, baseServiceUrl, $route) {

    function getDataAboutMe() {
        var aboutMeUrl = baseServiceUrl + '/api/me';

        return $http.get(aboutMeUrl, {
            headers: {
                'Authorization' : localStorage['Authorization']
            }
        });
    }
    function getFriendRequests() {
        var aboutMeUrl = baseServiceUrl + '/api/me/requests';

        return $http.get(aboutMeUrl, {
            headers: {
                'Authorization' : localStorage['Authorization']
            }
        });
    }
    function getFriends() {
        var aboutMeUrl = baseServiceUrl + '/api/me/friends/preview';

        return $http.get(aboutMeUrl, {
            headers: {
                'Authorization' : localStorage['Authorization']
            }
        });
    }
    function getFriendsByName(keywords) {
        if (keywords) {
            var friendUrl = baseServiceUrl + '/api/users/search?searchTerm=' + keywords;

            return $http.get(friendUrl, {
                headers: {
                    'Authorization' : localStorage['Authorization']
                }
            });
        }

    }
    function editProfile(name, email, profilePic, coverPic, gender) {
        var editProfileUrl = baseServiceUrl + '/api/me';
        var data = {
            name: name,
            email: email,
            profileImageData: profilePic,
            coverImageData: coverPic,
            gender: gender
        };

        return $http.put(editProfileUrl, data, {
            headers: {
                'Authorization' : localStorage['Authorization']
            }
        });
    }

    return {
        getDataAboutMe: getDataAboutMe,
        getFriendRequests: getFriendRequests,
        getFriends: getFriends,
        editProfile: editProfile,
        getFriendsByName: getFriendsByName
    };
});