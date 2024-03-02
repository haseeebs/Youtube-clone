export const commentsData = [
    {
        id: 1,
        username: 'Haseeb',
        content: 'Great video! Really enjoyed it.',
        reply: [
            {
                id: 1,
                username: 'ChannelHost',
                content: 'Thank you, Haseeb! We appreciate your positive feedback.'
            },
            {
                id: 2,
                username: 'TechEnthusiast',
                content: 'I agree! Can\'t wait for the next one.'
            }
        ]
    },
    {
        id: 2,
        username: 'VideoFanatic',
        content: 'Awesome content! Can\'t wait for more.',
        reply: [
            {
                id: 1,
                username: 'ChannelHost',
                content: `Thank you, VideoFanatic! We're thrilled that you enjoyed it.`
            }
        ]
    },
    {
        id: 3,
        username: 'NewbieViewer',
        content: 'This is my first time here. Love your videos!',
        reply: [
            {
                id: 1,
                username: 'ChannelHost',
                content: `Welcome, NewbieViewer! We're glad you found us.Hope you enjoy more videos!`
            }
        ]
    },
    {
        id: 4,
        username: 'TechGeek',
        content: 'Could you make a tutorial on the tech used in this video?',
        reply: [
            {
                id: 1,
                username: 'ChannelHost',
                content: `Certainly, TechGeek! We'll work on a tutorial for you.`
            }
        ]
    },
    {
        id: 5,
        username: 'RandomCommenter',
        content: 'Not sure why, but I disliked this video.',
        reply: [
            {
                id: 1,
                username: 'ChannelHost',
                content: 'We value your feedback, RandomCommenter. Let us know how we can improve.',
                reply: [
                    {
                        id: 5,
                        username: 'RandomCommenter',
                        content: 'Not sure why, but I disliked this video.',
                        reply: [
                            {
                                id: 1,
                                username: 'ChannelHost',
                                content: 'We value your feedback, RandomCommenter. Let us know how we can improve.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
];