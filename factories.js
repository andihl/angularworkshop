angular.module("factories", [])

    .factory("starFactory", function ($http) {
        var starFactory = {};
        var url = 'http://c-f-master-staging-preview.herokuapp.com/celepedia/rest/pcp';

        starFactory.getStars = function() {
            return $http({method: 'GET', url: url}).then(function(response) {
                return response.data;
            });
        };

        starFactory.addStar = function(star) {
            var data = {
                data: star
            };

            return $http({method: 'POST', url: url, data: data}).then(function(response) {
                return response.data;
            });
        };

        return starFactory;
    })
;