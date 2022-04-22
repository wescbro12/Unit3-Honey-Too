const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    let token = req.get('Authorization') || req.query.token;
    if (token) {
        token = toke.replace('Bearer', '');
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            req.user = err ? null : decoded.user;
            req.exp = err ? null : new Date(decoded.exp * 1000);
        })
        return next();
    } else {
        //this is if no token was sent
        req.user = null;
        return next()
    }
};