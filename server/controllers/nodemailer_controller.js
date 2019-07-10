const nodemailer = require('nodemailer');

module.exports = {
    send: async (req, res) => {
        const output = `
            <h1>HTML GOES HERE</h1>
        `

        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
            }
        });

        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "ellingfordtyler@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
          });
        res.status(200).send(info);
    }
}