const jwt = require('jsonwebtoken');
const config = require('../../config');

const secret = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'mysecrettokenthingy';

const authService = () => {
  const issue = (payload) => jwt.sign(payload, secret, { expiresIn:  config.tokenExpire});
  const verify = (token, cb) => jwt.verify(token, secret, cb);

  return {
    issue,
    verify,
  };
};

module.exports = authService;
