const client = require('twilio')(ACCOUNTSID, AUTHTOKEN);
const {
    ACCOUNTSID,
    AUTHTOKEN,
    MYNUMBER,
    FROMNUMBER
} = process.env;

module.exports = {
    send: (req, res) => {
        const {message} = req.body;
        client.messages
            .create({
                body: message,
                from: FROMNUMBER,
                to: MYNUMBER
            })
            .then((res) => {
                res.send(JSON.stringify({ success: true }));
            })
            .catch((err) => {
                res.send(JSON.stringify({ success: false }));
            })
    }
}
