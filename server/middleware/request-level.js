module.exports = {
    userLoggedIn: (req, res, next) => {
        if (!req.session.id) return res.status(401).send('Unauthorized, please log in.');
        next();
    },
    userIsBusiness: (req, res, next) => {
        const {role} = req.session.user;
        if (!(role !== "owner" || role !== "sales")) {
            return res.status(401).send('Unauthorized, you must be associated with a business.');
        }
        next();
    },
    userIsOwner: (req, res, next) => {
        const {role} = req.session.user;
        if (role !== "owner") return res.status(401).send('Unauthorized, you must be the account admin of a business account.');
        next();
    }
}