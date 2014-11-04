angular.module("controller", [])

    .controller("starListCtrl", function ($scope, starFactory) {
        $scope.stars = starFactory.getStars();

        $scope.addStar = function(star) {
            var newStar = {
                name: star.name,
                gender: star.gender
            };

            $scope.stars.push(newStar);
        }
    })
;