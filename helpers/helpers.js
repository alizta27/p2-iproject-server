const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const key = process.env.SECRET_KEY;

const hasingPassword = (password) => {
   return bcrypt.hash(password, 10);
}

const comparePassword = (password, hash) => {
   return bcrypt.compare(password, hash);
}

const signToken = (payload) => {
   return jwt.sign(payload, key);
}

const verifyToken = (token) => {
   return jwt.verify(token, key);
}

module.exports = {
   hasingPassword,
   comparePassword,
   signToken,
   verifyToken
}