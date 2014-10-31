angular.module("controller", [])

    .controller("starListCtrl", function ($scope, starFactory) {
        $scope.stars = starFactory.getStars();
    })
;