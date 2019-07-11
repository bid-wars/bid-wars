const bcrypt = require('bcryptjs');

module.exports = {
    bidReports: async (req, res) => {
        const db = req.app.get('db');
        const {id, company_id} = req.session.user;
        const {date} = req.body;
        const correctedDate = new Date(date).toDateString()
        const now = new Date(correctedDate);
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
    getBids: async (req, res) => {
        db = req.app.get('db');
        const{id} = req.session.user;
        const bids = await db.bids.get_bids({id});
        // const output = bids.map((bid) => {
        //     const {id, status, company_id, customer_id, date, salesman_id, items} = bid;
        //     console.log(items)
        //     const correctedDate = new Date(date);
        //     const correctedItems = items;
        //     return {
        //         id,
        //         status,
        //         company_id,
        //         customer_id,
        //         date: correctedDate,
        //         salesman_id,
        //         items: correctedItems
        //     }
        // });
        res.status(200).send(bids);
    },
    addBid: async (req, res) => {
        const db = req.app.get('db');
        const {
            companyName,
            contactFirst,
            contactLast,
            contactPhone,
            contactEmail,
            bidType,
            expirationDate,
            bidItems,
            dollarDisc
        } = req.body;
        const {
            company_id,
            id
        } = req.session.user;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync('password', salt);
        const dateMS = new Date().getTime();
        const expDateMS = new Date(expirationDate).getTime();
        const correctedItems = JSON.stringify(bidItems);
        const customer = await db.auth.register_user({
            firstname: contactFirst,
            lastname: contactLast,
            email: contactEmail,
            role: 'user',
            password: hash,
            company_id: 0,
        });
        const phone = await db.auth.register_phone({
            phone: contactPhone,
            id: customer[0].id
        });
        const bid = await db.bids.add_bid({
            status: 'open',
            company_id,
            customer_id: customer[0].id,
            date: dateMS,
            exp_date: expDateMS,
            salesman_id: id,
            items: `${correctedItems}`,
            name: companyName,
            type: bidType,
            discount: dollarDisc
        });
        res.sendStatus(200);
    },
    updateBid: (req, res) => {
        const db = req.app.get('db');
        const {
            id,
            status,
            company_id,
            customer_id,
            date,
            salesman_id,
            items
        } = req.body;
        const correctedItems = JSON.stringify(items);
        db.bids.update_bid({
            id,
            status,
            company_id,
            customer_id,
            date,
            salesman_id,
            items: correctedItems
        })
        res.sendStatus(200);
    },
    deleteBid: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.employees.delete_bid({id});
        res.sendStatus(200);
    }
}