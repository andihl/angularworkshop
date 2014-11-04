angular.module("factories", [])

    .factory("starFactory", function() {
        var starFactory = {};

        starFactory.getStars = function() {
            return [
                {
                    name: "star from Factory 1",
                    gender: 'm'
                },
                {
                    name: "star from Factory 2",
                    gender: 'm'
                },
                {
                    name: "star from Factory 3",
                    gender: 'f'
                }
            ];
        };

        return starFactory;
    })
;