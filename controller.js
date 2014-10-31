angular.module("controller", [])

    .controller("starListCtrl", function ($scope) {

        $scope.stars = [
            {
                name: "star 1"
            },
            {
                name: "star 2"
            },
            {
                name: "star 3"
            }
        ]
    })
;