module.exports = {
    open30: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.session.user;
        if (!id[0]) return res.status(401).send('Unauthorized access, please log in');
        const {date} = req.body;
        const now = new Date (date);
        const nowMS = now.getTime();
        const thirty = (1000*60*60*24*30);
        const past = nowMS - thirty;
        const bids = [];
        for (var i = 0; i < 30; i++) {
            const bidCount = await db.bids.get_open30_bids({past});
            past = past - thirty;
            bids.push(bidCount);
        }
        res.status(200).send(bids);
    },
    closed30: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.session.user;
        if (!id[0]) return res.status(401).send('Unauthorized access, please log in');
        const {date} = req.body;
        const now = new Date (date);
        const nowMS = now.getTime();
        const thirty = (1000*60*60*24*30);
        const past = nowMS - thirty;
        const bids = [];
        for (var i = 0; i < 30; i++) {
            const bidCount = await db.bids.get_closed30_bids({past});
            past = past - thirty;
            bids.push(bidCount);
        }
        res.status(200).send(bids);
    },
    rep30: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.session.user;
        if (!id[0]) return res.status(401).send('Unauthorized access, please log in');
        const {date} = req.body;
        const now = new Date (date);
        const nowMS = now.getTime();
        const thirty = (1000*60*60*24*30);
        const past = nowMS - thirty;
        const bids = await db.bids.get_rep30_bids({past});
        res.status(200).send(bids);
    }
}