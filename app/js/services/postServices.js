'use strict';

app.factory('postsService',
    function ($resource, baseServiceUrl) {
        var newsfeedResource = $resource(baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=5',
            null,
            {
                getAll: { method:'GET' }
            }
        );
        return {
            getPosts: function (params, success, error) {
                return postsResource.getAll(params, success, error);
            }
        };
    }
);

app.factory('commentsService',
    function ($resource, baseServiceUrl) {
        return {
            // TODO: implement a service to get towns
        };
    }
);

app.factory('likesService',
    function ($resource, baseServiceUrl) {
        return {
            // TODO: implement a service to get categories
        };
    }
);

app.factory('friendsService',
    function ($resource, baseServiceUrl) {
        return {
            // TODO: implement a service to get categories
        };
    }
);
