angular.module("controller", [])

    .controller("starListCtrl", function ($scope, starFactory) {
        starFactory.getStars().then(function(stars) {
            $scope.stars = stars;
        });

        $scope.addStar = function(starName) {
            var newStar = {
                name: starName
            };

            starFactory.addStar(newStar).then(function(response) {
                $scope.stars.push(response);
            });


        }
    })
;