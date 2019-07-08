const bcrypt = require('bcryptjs');

module.exports = {
    login: async (req, res) => {
        const {email, password} = req.body;
        const db = req.app.get('db');
        const {session} = req;
        const userFound = await db.auth.check_user_email({email});
        if (!userFound[0]) return res.status(401).send('User not found');
        const companyID = userFound[0].company_id;
        const companyInfo = userFound[0].company_id ? await db.auth.get_company_info({companyID}) : null;
        const id = userFound[0].id
        const phones = await db.auth.get_phones({id})
        const authenticated = bcrypt.compareSync(password, userFound[0].password);
        if (authenticated) {
            const {id, email, role, firstname, lastname, company_id} = userFound[0];
            const {name, logo, website} = companyInfo[0];
            const {number} = phones;
            session.user = {
                id,
                email,
                role,
                firstname,
                lastname,
                company_id,
                name,
                logo,
                website,
                number
            };
            return res.status(200).send(session.user);
        } else {
            return res.status(401).send("Incorrect username or password");
        }
    },
    register: async (req, res) => {
        const {email, password, firstname, lastname, companyName, website, phone, logo, role} = req.body;
        const db = req.app.get('db');
        const {session} = req;
        const userFound = await db.auth.check_user_email({email});
        if (userFound[0]) return res.status(409).send('User already exists');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const createdUser = await db.auth.register_user({
            email,
            password: hash,
            firstname,
            lastname,
            role
        });
        const createdPhone = await db.auth.register_phone({
            phone,
            id: createdUser[0].id
        });
        const createdCompany = await db.auth.register_company({
            companyName,
            logo,
            website
        });
        session.user = {
            ...createdUser[0],
            ...createdPhone[0],
            ...createdCompany[0]
        };
        res.status(200).send(session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}