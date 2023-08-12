const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;
const createAccessToken = (admin) => {
    
    const data = {
        admin: admin.username
    };
    return jwt.sign({data}, process.env.SECRET, {
        expiresIn: maxAge
    });
};

// Module Exports
module.exports = {
    maxAge,
    createAccessToken
};