const bcrypt = require('bcryptjs');

module.exports = {
    login: async (req, res) => {
        const {email, password} = req.body;
        const db = req.app.get('db');
        const {session} = req;
        const userFound = await db.auth.check_user_email({email});
        if (!userFound[0]) return res.status(401).send('User not found');
        const authenticated = bcrypt.compareSync(password, userFound[0].password);
        if (authenticated) {
            session.user = userFound[0];
            return res.status(200).send(session.user);
        } else {
            return res.status(401).send("Incorrect username or password");
        }
    }
}