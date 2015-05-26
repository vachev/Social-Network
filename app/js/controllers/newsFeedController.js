app.controller('NewsFeedController', function ($scope, postServices) {
    postServices.getNewsFeedPages(5, '').success(function (data) {
        $scope.posts = data;
    })
});