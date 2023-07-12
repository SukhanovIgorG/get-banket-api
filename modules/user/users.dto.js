const { Joi } = require("express-validation");
// const { celebrate, Joi } = require('celebrate');


exports.addUserDto = {
  body: Joi.object({
      name: Joi.string().required().min(2).max(50).trim().messages({
          "string.empty": `Поле не заполнено `,
      }),
      photo: Joi.string(),
      login: Joi.string().required().min(2).max(30),
      email: Joi.string().required(),
      tell: Joi.string().required(),
      password: Joi.string().required().min(6).max(30),
      lock: Joi.boolean(),
      role: Joi.string().required().min(2).max(10), // TODO: прописать конкретику
      authorId: Joi.string().required(),
      placeId: Joi.string().required(),
  }),
};
