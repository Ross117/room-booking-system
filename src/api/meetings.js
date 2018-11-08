const getMyMeetings = () => new Promise((resolve, reject) => {
    resolve([{
        day: '08/11/2018',
        startTime: '14:00',
        endTime: '15:00',
        room: '1-A (5)',
        current: true
    }, {
        day: '08/11/2018',
        startTime: '15:00',
        endTime: '16:00',
        room: '1-B (6)',
        current: false
    }, {
        day: '09/11/2018',
        startTime: '14:00',
        endTime: '15:00',
        room: '1-B (6)',
        current: false
    }])
})

export {
    getMyMeetings
}