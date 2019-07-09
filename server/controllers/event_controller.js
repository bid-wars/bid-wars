module.exports = {
    getEvents: async (req, res) => {
        const db = req.app.get('db');
        const {company_id} = req.session.user;
        const events = await db.events.get_all({
            company_id
        });
        const output = events.map((elem, ind, arr) => {
            const {name, description, location, id, start_date, end_date} = elem;
            const StartTime = new Date(+start_date);
            const EndTime = new Date(+end_date);
            return {
                Subject: name,
                Description: description,
                Location: location,
                StartTime,
                EndTime,
                Id: id,
            }
        })
        res.status(200).send(output);
    },
    addEvent: async (req, res) => {
        const db = req.app.get('db');
        const {Subject, Description, Location, StartTime, EndTime} = req.body;
        const {company_id} = req.session.user;
        const newStartTime = new Date(StartTime);
        const newEndTime = new Date(EndTime);
        const startCorrected = newStartTime.getTime();
        const endCorrected = newEndTime.getTime();
        const Id = await db.events.add_event({
            company_id,
            Subject,
            Description,
            Location,
            startCorrected,
            endCorrected
        });
        res.status(200).send(Id[0]);
    },
    updateEvent: (req, res) => {
        const db = req.app.get('db');
        const {Id, Subject, Description, Location, StartTime, EndTime} = req.body;
        const newStartTime = new Date(StartTime);
        const newEndTime = new Date(EndTime);
        const startCorrected = newStartTime.getTime();
        const endCorrected = newEndTime.getTime();
        db.events.update_event({
            Id,
            Subject,
            Description,
            Location,
            startCorrected,
            endCorrected
        });
        res.sendStatus(200);
    },
    deleteEvent: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const db = req.app.get('db');
        db.events.delete_event({
            id
        });
        res.sendStatus(200);
    }
}