Itinerary.directive('calendarView', ['courseList', function(courseList) {
    return {
        templateUrl: 'calendar-view/template.html',
        link: function(scope, element, attrs) {
            scope.$watch(function() { return courseList; }, updateCalendar, true);
            function updateCalendar(listObject) {
                angular.element(document.querySelectorAll('.table-overlay-offset')).empty();
                for (var i = 0; i < listObject.length; i++) {
                    course = listObject[i];
                    for (var j = 0; j < course.days.length; j++) {
                        courseDay = course.days[j];
                        if (courseDay.value === true) {
                            var dayTable = document.querySelectorAll('.table > thead > tr > th')[j+1];
                            var insertionPoint = dayTable.querySelector('.table-overlay-offset');
                            
                            var timeSpan = course.endTime - course.startTime;
                            var height = ((timeSpan / 1000) / 3600) * 39;
                            
                            var timeOffset = course.startTime - new Date(1970, 0, 1, 6, 0, 0);
                            var top = ((timeOffset / 1000) / 3600) * 39; // convert from ms to hrs then translate to px.
                            angular.element(insertionPoint).append('\
                            <div style="top:'+top+'px; height:'+height+'px; background-color: #999;" class="table-overlay-course">\
                                <span>'+course.name+'</span>\
                            </div>');
                        }
                    }
                }
            }
        }
    }
}]);