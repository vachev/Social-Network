app.controller('UserWallController', function ($scope, $route, userService, postServices) {

    function updateNews() {
            postServices.getUserWall().success(function (data) {
                $scope.posts = data;
            })
    }
    updateNews();

    userService.getFriendByName().success(function (data) {
            $scope.data = data;
        });

    $scope.sendFriendRequest = function (username) {
        userService.sendFriendRequest(username).success(function () {
            $route.reload();
        });
    };

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

    $scope.deletePost = function (postId) {
        postServices.deletePost(postId).success(function () {
            updateNews();
        })
    };

    $scope.changeCommentClickedTrue = function () {
        $scope.commentClicked = true;
    };

    $scope.editCommentClicked = false;
    $scope.commentClicked = false;
    $scope.me = localStorage['username'];
});