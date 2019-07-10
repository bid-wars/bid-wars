module.exports = {
    getEmployees: async (req, res) => {
        db = req.app.get('db');
        const {id, company_id} = req.session.user;
        const employees = await db.employees.get_employees({id, company_id});
        res.status(200).send(employees);
    },
    addEmployee: (req, res) => {
        console.log('Body', req.body);
        console.log('session.user', req.session.user);
        res.sendStatus(200);
    },
    updateEmployee: (req, res) => {
        console.log('Body', req.body);
        console.log('session.user', req.session.user);
        res.sendStatus(200);
    },
    deleteEmployee: (req, res) => {
        console.log('Body', req.body);
        console.log('session.user', req.session.user);
        res.sendStatus(200);
    }
}