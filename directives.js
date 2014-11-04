angular.module('directives', [])

    .directive('starItem', function() {
        return {
            restrict: 'A',
            template: '<tr>' +
                    '<td>{{ star.data.name }}</td>' +
                    '<td>' +
                        '<span ng-if="star.data.gender === \'m\'">männlich</span>' +
                        '<span ng-if="star.data.gender === \'f\'">weiblich</span>' +
                    '</td>' +
                    '<td>' +
                        '<button ng-click="highlightStar(star.id)">highlight</button>' +
                    '</td>' +
                '</tr>',
            replace: true,
            scope: {
                star: '=starItem'
            },
            link: function(scope, element, attrs) {
                scope.highlightStar = function() {
                    element.css('background-color', 'red');
                };
            }
        };
    })

;

