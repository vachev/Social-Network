app.controller('PublishPostSidebarController', function ($scope, postServices, $route) {
    $scope.publishPost = function (postContent) {
        postServices.publishPost(postContent).success(function () {
            $route.reload();
        })
    }
});