'use strict';

eventsApp.filter('durations', function() {
    return function(duration) {
        switch(duration) {
            case 1:
                return "Half Hour";
            case 2:
                return "1 Hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        }
    }
})

eventsApp.filter('difficulties', function() {
    return function(difficulty) {
        var imgPath = '/img/icons/difficulty-level/';
        switch(difficulty) {
            case 1:
                return imgPath + 'easy.png';
            case 2:
                return imgPath + 'medium.png';
            case 3:
                return imgPath + 'hard.png';
        }
    }
})