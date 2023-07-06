const express = require('express');
const { celebrate, Joi } = require('celebrate');

const userRoutes = express.Router();
const userControllers = require('./userController');

userRoutes.get('/users/me', userControllers.getUserInfo);
userRoutes.get('/users', userControllers.getAllUsers);
userRoutes.post('/users', userControllers.createUser);

// userRoutes.patch('/users/me', celebrate({
//   body: Joi.object().keys({
//     name: Joi.string().required().min(2).max(30),
//     email: Joi.string().required().email(),
//   }),
// }), userControllers.updateUserInfo);

module.exports = {
  userRoutes,
};