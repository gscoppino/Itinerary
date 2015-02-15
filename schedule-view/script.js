Itinerary.directive('scheduleView', ['courseList', function(courseList) {
    return {
        templateUrl: 'schedule-view/template.html',
        link: function(scope, element, attrs) {
            // test data
            scope.courses = courseList;
            
            // storage for "new" course
            scope.newCourse = {
                name: undefined,
                startTime: undefined,
                endTime: undefined,
                'days': [
                    {
                        'symbol': 'M',
                        'value': false
                    }, 
                    {
                        'symbol': 'T',
                        'value': false
                    }, 
                    {
                        'symbol':'W',
                        'value': false
                    }, 
                    {
                        'symbol': 'R',
                        'value': false
                    }, 
                    {
                        'symbol':'F',
                        'value': false
                    }
                ]
            };
            
            scope.addCourse = function() {
                if (scope.newCourse.name && scope.newCourse.startTime && scope.newCourse.endTime) {
                    scope.courses.push(scope.newCourse);
                    console.log(courseList);
                    scope.newCourse = {
                        name: undefined,
                        startTime: undefined,
                        endTime: undefined,
                        'days': [
                            {
                                'symbol': 'M',
                                'value': false
                            }, 
                            {
                                'symbol': 'T',
                                'value': false
                            }, 
                            {
                                'symbol':'W',
                                'value': false
                            }, 
                            {
                                'symbol': 'R',
                                'value': false
                            }, 
                            {
                                'symbol':'F',
                                'value': false
                            }
                        ]
                    };
                }
            }
            
            scope.removeCourse = function(index) {
                scope.courses.splice(index, 1);
            }
        }
    }
}]);