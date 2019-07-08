module.exports = {
    open30: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.session.user;
        if (!id) return res.status(401).send('Unauthorized access, please log in');
        const {date} = req.body;
        const now = new Date(date);
        const nowMS = now.getTime();
        const thirty = (1000*60*60*24*30);
        const day = (1000*60*60*24);
        let past = nowMS - thirty;
        const bids = [];
        for (var i = 0; i <= 30; i++) {
            let bidCount = await db.bids.get_open30_bids({id, past});
            past += day;
            bids.push(+bidCount[0].count);
        }
        res.status(200).send(bids);
    },
    closed30: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.session.user;
        if (!id) return res.status(401).send('Unauthorized access, please log in');
        const {date} = req.body;
        const now = new Date(date);
        const nowMS = now.getTime();
        const thirty = (1000*60*60*24*30);
        const day = (1000*60*60*24);
        let past = nowMS - thirty;
        const bids = [];
        for (var i = 0; i <= 30; i++) {
            let bidCount = await db.bids.get_closed30_bids({id, past});
            past += day;
            bids.push(+bidCount[0].count);
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