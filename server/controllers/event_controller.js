module.exports = {
    getEvents: async (req, res) => {
        const db = req.app.get('db');
        const {company_id} = req.session.user;
        const events = await db.events.get_all({
            company_id
        });
        res.status(200).send(events);
    },
    addEvent: async (req, res) => {
        const db = req.app.get('db');
        const {Subject, Description, Location, StartTime, EndTime} = req.body;
        const {company_id} = req.session.user;
        const startCorrected = StartTime.getTime();
        const endCorrected = EndTime.getTime();
        const Id = await db.events.add_event({
            company_id,
            Subject,
            Description,
            Location,
            startCorrected,
            endCorrected
        });
        res.status(200).send(Id);
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