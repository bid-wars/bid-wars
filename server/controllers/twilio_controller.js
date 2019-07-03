const {
    ACCOUNTSID,
    AUTHTOKEN,
    MYNUMBER,
    FROMNUMBER
} = process.env;

const client = require('twilio')(ACCOUNTSID, AUTHTOKEN);

module.exports = {
    send: (req, res) => {
        const {message} = req.body;
        client.messages
            .create({
                body: message,
                from: FROMNUMBER,
                to: MYNUMBER
            })
            .then((message) => {
                res.status(200).send(JSON.stringify({ success: true }));
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send(JSON.stringify({ success: false }));
            })
    }
}
