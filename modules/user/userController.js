require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const NotFoundError = require('../errors/errors/not-found-error');
const CastError = require('../errors/errors/cast-error');
const MongoError = require('../errors/errors/mongo-error');

const {
  mongoErrorMessage, castErrorMessage, notFoundErrorMessage, loginErrorMessage,
} = require('../errors/constants');

const { User } = require('../../models/userModels');

const { JWT_SECRET, NODE_ENV } = process.env;

exports.getUserInfo = async (req, res, next) => {
  await User.findById(req.user._id)
    .orFail(() => {
      throw new NotFoundError(notFoundErrorMessage);
    })
    .then((user) => {
      res.send({ user });
    })
    .catch(next);
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.send(users);
  } catch (error) {
    throw new NotFoundError(notFoundErrorMessage);
  }
};

exports.updateUserInfo = async (req, res, next) => {
  const owner = req.user._id;
  const { name, email } = req.body;
  await User.findByIdAndUpdate(
    owner,
    { name, email },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.send({ user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new CastError(castErrorMessage));
      }
      if (err.code === 11000) {
        return next(new MongoError(mongoErrorMessage));
      } return next(err);
    });
};

exports.createUser = async (req, res, next) => {
  const {
    name,
    photo,
    login,
    email,
    tell,
    godMode,
    lock,
    roleGlobal,
    roleLocal,
    authorId,
    placeId
  } = req.body;

  try {
    let hashPass
    await bcrypt.hash(req.body.password, 10)
      .then((hash) => {
      hashPass = hash
    })

    const newUser = await User.create({
      name,
      photo,
      login,
      email,
      tell,
      password: hashPass,
      godMode,
      lock,
      roleGlobal,
      roleLocal,
      authorId,
      placeId
    })

    const { password, ...userWithOutPass } = newUser._doc;
    res.send(userWithOutPass);
  } catch (error) {
    res.send(error.message);
    if (error.name === 'ValidationError') {
      return next(new CastError(castErrorMessage));
    }
    if (error.code === 11000) {
      return next(new MongoError(mongoErrorMessage));
    } return next(error);
  }
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error(loginErrorMessage));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
          // хеши не совпали — отклоняем промис
            return Promise.reject(new Error(loginErrorMessage));
          }
          // аутентификация успешна
          return user;
        })
        .then((userAuth) => {
          const token = jwt.sign(
            { _id: userAuth._id },
            NODE_ENV === 'production' ? JWT_SECRET : 'super-strong-secret-key',
            { expiresIn: '1d' },
          );
          res
            .send({
              token,
            });
        });
    })
    .catch(() => {
      next(new AuthError(loginErrorMessage));
    });
};
