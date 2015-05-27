app.controller('EditProfileController', function ($scope, userService) {
    $scope.editProfile = function () {
        var name = $scope.name;
        var email = $scope.email;
        var gender = $scope.gender;
        var profilePic = $scope.profilePhoto;
        var coverPic = $scope.coverPhoto;

        userService.editProfile(name, email, profilePic.base64, coverPic.base64, gender).success(function () {
            console.log('YES!');
        }).error(function () {
            console.log(coverPic.base64);
        });
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