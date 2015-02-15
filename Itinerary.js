var Itinerary = angular.module('Itinerary', []);
Itinerary.value('courseList', [
    {
        'name': 'ECET 1101',
        'startTime': new Date(1970, 0, 1, 10, 0, 0),
        'endTime': new Date(1970, 0, 1, 11, 15, 0),
        'days': [
            {
                'symbol': 'M',
                'value': true
            }, 
            {
                'symbol': 'T',
                'value': false
            }, 
            {
                'symbol':'W',
                'value': true
            }, 
            {
                'symbol': 'R',
                'value': false
            }, 
            {
                'symbol':'F',
                'value': true
            }
        ]
    },
    {
        'name': 'MATH 2253',
        'startTime': new Date(1970, 0, 1, 13, 0, 0),
        'endTime': new Date(1970, 0, 1, 14, 15, 0),
        'days': [
            {
                'symbol': 'M',
                'value': false
            }, 
            {
                'symbol': 'T',
                'value': true
            }, 
            {
                'symbol':'W',
                'value': false
            }, 
            {
                'symbol': 'R',
                'value': true
            }, 
            {
                'symbol':'F',
                'value': false
            }
        ]
    }
]);