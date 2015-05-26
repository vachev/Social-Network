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

    return {
        getNewsFeedPages: getNewsFeedPages
    }
});