app.controller('EditProfileController', function ($scope, userService, Notification, $route) {

    $scope.editProfile = function () {
        var name = $scope.name;
        var email = $scope.email;
        var gender = $scope.gender;
        var profilePic = $scope.profilePhoto;
        var coverPic = $scope.coverPhoto;
        if (profilePic == undefined && coverPic == undefined) {
            userService.editProfile(name, email, gender).success(function () {
                Notification.success('Profile edit success!')
            }).error(function (err) {
                Notification.error(err.message);
            });
        } else {
            userService.editProfile(name, email, gender, profilePic.base64, coverPic.base64).success(function () {
                Notification.success('Profile edit success!')
                $route.reload();
            }).error(function (err) {
                Notification.error(err.message);
            });
        }

    };

    userService.getDataAboutMe().success(
        function (data) {
            $scope.name = data.name;
            $scope.profilePic = data.profileImageData;
            $scope.coverPic = data.coverImageData;
            $scope.email = data.email;
        }
    );

    function formatProfileImgToBase64() {
        $scope.profilePhoto = $scope.profilePhoto.base64;
    }

    function formatCoverImgToBase64() {
        $scope.coverPhoto = $scope.coverPhoto.base64;
    }

});