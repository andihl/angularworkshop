angular.module("factories", [])

    .factory("starFactory", function () {
        var starFactory = {};

        starFactory.getStars = function() {
            return [
                {
                    name: "star from Factory 1"
                },
                {
                    name: "star from Factory 2"
                },
                {
                    name: "star from Factory 3"
                }
            ];
        }

        return starFactory;
    })
;