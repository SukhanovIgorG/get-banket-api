const { validate } = require('express-validation');
// const { celebrate, Joi } = require('celebrate');

module.exports = function(dto, options = {}, joiOptions = {}){
    // return celebrate(
    return validate(
        dto,
        {
            ...options
        },
        {
            abortEarly: false,
            ...joiOptions
        }
    );
}
