const User = require('../../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken
};

function checkToken(req, res) {
    console.log('req.user', req.user);
    res.status(200).json(req.exp);
}


async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        res.status(200).json(createJWT(user));
    } catch {
        res.status(400).json('Login Error')
    }
}

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        res.status(200).json(token);
    } catch (e) {
        res.status(400).json(e);
    }
}

/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
        { user }, 
        process.env.SECRET,
        {expiresIn:'24h'}
    )
}