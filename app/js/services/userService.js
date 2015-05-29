app.factory('userService', function ($http, baseServiceUrl, $route, $routeParams) {

    function getDataAboutMe() {
        var aboutMeUrl = baseServiceUrl + '/api/me';

        return $http.get(aboutMeUrl, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function getFriendRequests() {
        var aboutMeUrl = baseServiceUrl + '/api/me/requests';

        return $http.get(aboutMeUrl, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function getFriends() {
        var aboutMeUrl = baseServiceUrl + '/api/me/friends';

        return $http.get(aboutMeUrl, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function getFriendsByName(keywords) {
        if (keywords) {
            var friendUrl = baseServiceUrl + '/api/users/search?searchTerm=' + keywords;

            return $http.get(friendUrl, {
                headers: {
                    'Authorization': localStorage['Authorization']
                }
            });
        }

    }

    function editProfile(name, email, gender, profilePic, coverPic) {
        var editProfileUrl = baseServiceUrl + '/api/me';
        var data = {
            name: name,
            email: email,
            gender: gender
        };
        if (profilePic) {
            data['profileImageData'] = profilePic;
        }
        if (coverPic) {
            data['coverImageData'] = coverPic;
        }

        return $http.put(editProfileUrl, data, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function approveRequest(requestId) {
        var url = baseServiceUrl + '/api/me/requests/' + requestId + '?status=approved';

        return $http.put(url, null, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function declineRequest(requestId) {
        var url = baseServiceUrl + '/api/me/requests/' + requestId + '?status=rejected';

        return $http.put(url, null, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function sendFriendRequest(username) {
        var friendUrl = baseServiceUrl + '/api/me/requests/' + username;

        return $http.post(friendUrl, null,{
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function getFriendByName() {
        var friendUrl = baseServiceUrl + '/api/users/' + $routeParams.username;

        return $http.get(friendUrl, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function GetFriendsFriends() {
        var friendUrl = '/api/users/'+ $routeParams.username +'/friends/preview';

        return $http.get(friendUrl, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }


    return {
        getDataAboutMe: getDataAboutMe,
        getFriendRequests: getFriendRequests,
        getFriends: getFriends,
        editProfile: editProfile,
        getFriendsByName: getFriendsByName,
        approveRequest: approveRequest,
        declineRequest: declineRequest,
        getFriendByName: getFriendByName,
        sendFriendRequest: sendFriendRequest,
        GetFriendsFriends: GetFriendsFriends
    };
});