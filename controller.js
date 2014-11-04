angular.module("controller", [])

    .controller("starListCtrl", function ($scope, starFactory) {
        starFactory.getStars().then(function(stars) {
            $scope.stars = stars;
        });

        $scope.addStar = function(star) {
            var newStar = {
                name: star.name,
                gender: star.gender
            };

            starFactory.addStar(newStar).then(function(response) {
                $scope.stars.push(response);
            });


        }
    })
;