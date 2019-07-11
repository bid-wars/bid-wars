const bcrypt = require('bcryptjs');

module.exports = {
    getEmployees: async (req, res) => {
        db = req.app.get('db');
        const {id, company_id} = req.session.user;
        const employees = await db.employees.get_employees({id, company_id});
        res.status(200).send(employees);
    },
    addEmployee: async (req, res) => {
        const db = req.app.get('db');
        const {company_id} = req.session.user;
        for (employee in req.body) {
            const {email, password, firstname, lastname, role} = employee;
            const userFound = await db.auth.check_user_email({email});
            if (!userFound[0]) {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);
                db.auth.register_user({
                    email,
                    password: hash,
                    firstname,
                    lastname,
                    role,
                    company_id
                });
            };
        };
        res.sendStatus(200);
    },
    updateEmployee: (req, res) => {
        const db = req.app.get('db');
        const {company_id} = req.session.user;
        const {email, password, firstname, lastname, role} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        db.auth.update_user({
            email,
            password: hash,
            firstname,
            lastname,
            role,
            company_id
        });
        res.sendStatus(200);
    },
    deleteEmployee: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.auth.delete_user({id});
        res.sendStatus(200);
    }
}