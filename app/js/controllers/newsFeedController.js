app.controller('NewsFeedController', function ($scope, postServices, $route) {
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
    }
});