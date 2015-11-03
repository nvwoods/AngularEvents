'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {

        $scope.levels = [
            {name: "Introductory", value: "1"},
            {name: "Intermediate", value: "2"},
            {name: "Advanced", value: "3"}
        ];

        $scope.saveEvent = function(event, newEventForm) {
            console.log(newEventForm);
            if(newEventForm.$valid) {
                window.alert('event ' + event.name + ' saved');
            }
        };

        $scope.cancelEdit = function() {
            window.location = "/EventDetails.html";
        };
    }
);