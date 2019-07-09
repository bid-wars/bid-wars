module.exports = {
    getEvents: (req, res) => {
        console.log('Body', req.body);
        console.log('session.user', req.session.user);
        res.sendStatus(200);
    },
    addEvent: (req, res) => {
        console.log('Body', req.body);
        console.log('session.user', req.session.user);
        res.sendStatus(200);
    },
    updateEvent: (req, res) => {
        console.log('Body', req.body);
        console.log('session.user', req.session.user);
        res.sendStatus(200);
    },
    deleteEvent: (req, res) => {
        console.log('Body', req.body);
        console.log('session.user', req.session.user);
        res.sendStatus(200);
    }
}