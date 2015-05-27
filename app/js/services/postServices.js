app.factory('postServices', function ($http, baseServiceUrl) {
    function getNewsFeedPages(pageSize, startPostId) {
        if (pageSize) {
            pageSize = 5;
        }
        var serviceUrl = baseServiceUrl + '/api/me/feed?StartPostId=' + startPostId + '&PageSize=' + pageSize;

        return $http.get(serviceUrl, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function likePost(postId) {
        var url = baseServiceUrl + '/api/Posts/' + postId + '/likes';
        return $http.post(url, null, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function dislikePost(postId) {
        var url = baseServiceUrl + '/api/Posts/' + postId + '/likes';
        return $http.delete(url, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }
    return {
        getNewsFeedPages: getNewsFeedPages,
        likePost: likePost,
        dislikePost: dislikePost
    }
});