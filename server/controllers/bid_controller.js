module.exports = {
    bidReports: async (req, res) => {
        const db = req.app.get('db');
        const {id, company_id} = req.session.user;
        const {date} = req.body;
        const now = new Date(date);
        const nowMS = now.getTime();
        const thirty = (1000*60*60*24*30);
        const day = (1000*60*60*24);
        const output = {};
        let openPast = nowMS - thirty;
        output.open30Bids = [];
        for (var i = 0; i <= 30; i++) {
            let bidCount = await db.bids.get_open30_bids({id, openPast});
            openPast += day;
            output.open30Bids.push(+bidCount[0].count);
        }
        let closedPast = nowMS - thirty;
        output.closed30Bids = [];
        for (var i = 0; i <= 30; i++) {
            let bidCount = await db.bids.get_closed30_bids({id, closedPast});
            closedPast += day;
            output.closed30Bids.push(+bidCount[0].count);
        }
        const past = nowMS - thirty;
        output.salesBidCount = await db.bids.get_rep30_bids({id, past, company_id});
        res.status(200).send(output);
    },
    getBids: (req, res) => {
        console.log('Body', req.body);
        console.log('session.user', req.session.user);
        res.sendStatus(200);
    },
    addBid: (req, res) => {
        console.log('Body', req.body);
        console.log('session.user', req.session.user);
        res.sendStatus(200);
    },
    updateBid: (req, res) => {
        console.log('Body', req.body);
        console.log('session.user', req.session.user);
        res.sendStatus(200);
    },
    deleteBid: (req, res) => {
        console.log('Body', req.body);
        console.log('session.user', req.session.user);
        res.sendStatus(200);
    }
}