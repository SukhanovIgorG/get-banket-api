require('dotenv').config();
const jwt = require('jsonwebtoken');
const AuthError = require('../errors/errors/auth-error');
const { authErrorMessage } = require('../errors/constants');

const { JWT_PROD, JWT_DEV, NODE_ENV } = process.env;

const extractBearerToken = (header) => header.replace('Bearer ', ''); // для варианта с токеном в ответе/запросе

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthError(authErrorMessage);
  }
  const token = extractBearerToken(authorization);
  let payload;
  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'prod' ? JWT_PROD : JWT_DEV,
    );
  } catch (err) {
    next(new AuthError(authErrorMessage));
  }
  req.user = payload; // записываем пейлоуд в объект запроса
  next();
};