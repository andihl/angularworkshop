angular.module("filters", [])

    .filter("starNameFilter", function() {
        return function(starList, query) {
            var matchingStars = [];

            console.log(starList, query);

            angular.forEach(starList, function(star) {
                if(star.data.name.indexOf(query) !== -1) {
                    matchingStars.push(star);
                }
            });

            return matchingStars;
        };
    })
;