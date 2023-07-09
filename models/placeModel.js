const { Schema, model } = require("mongoose");

const placeShema = new Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 30,
    },
    logo: {
      type: String,
      required: false
    },
    address: {
      type: String,
      minLength: 2,
      maxLength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) => isEmail(v),
      },
    },
    tell: {
      type: String,
      required: false,
      unique: true,
      validator: function (v) {
        return /7\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid tell!`
    },
    lock: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true},
);


exports.Place = model('Place', placeShema);

