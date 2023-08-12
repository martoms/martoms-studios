const jwt = require('jsonwebtoken');

// Regular Users Profile Verification
const verify = (req, res, next) => {

  const { authorization } = req.headers;
  let token = authorization;
  if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
          if (err) {
              res.status(403).json({
                  message : 'Authentication failed!'
              });
          } else {
              next();
          }
      });
  } else {
      res.status(403).json({
          message : 'Authentication failed!'
      });
  }
};


// Module Exports
module.exports = { verify };