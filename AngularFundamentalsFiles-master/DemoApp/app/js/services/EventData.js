eventsApp.factory('eventData', function() {
    return{
        event: {
            name: 'Angular Boot Camp',
            date: 1359781015626,
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 3,
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for Fun and Profit',
                    creatorName: 'Joe Bloggs',
                    duration: 2,
                    level: 2,
                    abstract: 'Learn about scopes and stuff.  It\'s fun and profitable!',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Stanislaw Pietorov',
                    duration: 4,
                    level: 1,
                    abstract: 'Discipline your controllers to get the best out of them.',
                    upVoteCount: 0
                }
            ]
        }
    }
})