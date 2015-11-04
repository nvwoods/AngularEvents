'use strict';

eventsApp.controller('EventController',
    function EventsController($scope, eventData) {
        $scope.sortorder = 'name';
        $scope.event = eventData.event;

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);