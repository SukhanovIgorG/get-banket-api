const express = require('express');
const { celebrate, Joi } = require('celebrate');
const { login, createUser } = require('../user/userController');

const loginRoutes = express.Router();

loginRoutes.post('/login', celebrate({
  // валидируем параметры
  body: Joi.object().keys({
    login: Joi.string().required(),
    password: Joi.string().required(),
  }),
}), login);

// loginRoutes.post('/signup', celebrate({
//   // валидируем параметры
//   body: Joi.object().keys({
//     name: Joi.string().required().min(2).max(30),
//     email: Joi.string().required().email(),
//     password: Joi.string().required(),
//   }),
// }), createUser);

module.exports = {
  loginRoutes,
};
