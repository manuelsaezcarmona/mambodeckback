const jwt = require('jsonwebtoken');
require('dotenv').config();

const createJWT = (uid, username) => {
  const payload = { uid, username };

  return jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' });
};

// const token = createJWT(1234, 'manu');

module.exports = { createJWT };
