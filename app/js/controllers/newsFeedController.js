app.controller('NewsFeedController', function ($scope, postServices, Notification) {
    function updateNews() {
        postServices.getNewsFeedPages(5, '').success(function (data) {
            $scope.posts = data;
        });
    }

    updateNews();

    $scope.likePost = function (postId) {
        postServices.likePost(postId).success(function () {
            updateNews();
        })
    };

    $scope.dislikePost = function (postId) {
        postServices.dislikePost(postId).success(function () {
            updateNews();
        })
    };

    $scope.commentPost = function (commentContent, postId) {
        postServices.commentPost(commentContent, postId).success(function () {
            $scope.commentClicked = false;
            updateNews();
        })
    };

    $scope.likeComment = function (postId, commentId) {
        postServices.likeComment(postId, commentId).success(function () {
            updateNews();
        })
    };

    $scope.dislikeComment = function (postId, commentId) {
        postServices.dislikeComment(postId, commentId).success(function () {
            updateNews();
        })
    };

    $scope.removeBar = function () {
        $scope.commentClicked = false;
        updateNews();
    };

    $scope.deleteComment = function (postId, commentId) {
        postServices.deleteComment(postId, commentId).success(function () {
            updateNews();
        })
    };

    $scope.editComment = function (postId, commentId, commentContent) {
        postServices.editComment(postId, commentId, commentContent).success(function () {
            $scope.editCommentClicked = false;
            updateNews();
        })
    };

    $scope.changeEditValue = function () {
        if ($scope.editCommentClicked == true) {
            $scope.editCommentClicked = false;
        } else {
            $scope.editCommentClicked = true;
        }

    };
    $scope.editCommentClicked = false;
    $scope.commentClicked = false;
    $scope.username = localStorage['username'];


});