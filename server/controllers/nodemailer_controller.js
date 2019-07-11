const nodemailer = require('nodemailer');
const {
    EMAIL,
    PASSWORD
} = process.env;

module.exports = {
    send: async (req, res) => {
        const {toEmail, emailBody} = req.body;
        // const html = `
        //     <h1>HTML GOES HERE</h1>
        // `

        let transporter = nodemailer.createTransport({
            host: "smtp.mail.yahoo.com",
            port: 465,
            secure: true,
            pool: true,
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        });
        let info = await transporter.sendMail({
            from: EMAIL, // sender address
            to: toEmail, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            emailBody // html body
          });
        res.status(200).send(info);
    }
}