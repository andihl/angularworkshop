angular.module("controller", [])

    .controller("starListCtrl", function ($scope, starFactory) {
        $scope.stars = starFactory.getStars();

        $scope.addStar = function(starName) {
            var newStar = {
                name: starName
            };

            $scope.stars.push(newStar);
        }
    })
;