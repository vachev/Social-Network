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

    function likeComment(postId, commentId) {
        var url = baseServiceUrl + '/api/posts/' + postId + '/comments/' + commentId + '/likes';
        return $http.post(url, null, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function dislikeComment(postId, commentId) {
        var url = baseServiceUrl + '/api/posts/' + postId + '/comments/' + commentId + '/likes';
        return $http.delete(url, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function commentPost(commentContent, postId) {
        var url = baseServiceUrl + '/api/Posts/' + postId + '/comments';
        var data = {
            commentContent: commentContent
        };
        return $http.post(url, data, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function deleteComment(postId, commentId) {
        var url = baseServiceUrl + '/api/posts/'+ postId +'/comments/' + commentId;
        return $http.delete(url, {
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    function editComment(postId, commentId, commentContent) {
        var url = baseServiceUrl + '/api/posts/'+ postId +'/comments/' + commentId;
        var data = {
            commentContent: commentContent
        };

        return $http.put(url, data,{
            headers: {
                'Authorization': localStorage['Authorization']
            }
        });
    }

    return {
        getNewsFeedPages: getNewsFeedPages,
        likePost: likePost,
        dislikePost: dislikePost,
        commentPost: commentPost,
        likeComment: likeComment,
        dislikeComment: dislikeComment,
        deleteComment: deleteComment,
        editComment: editComment
    }
});