const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = require("mongoose");

const userShema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 30,
    },
    photo: {
      type: String,
      required: false
    },
    login: {
      type: String,
      minLength: 2,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validate: {
      //   validator: (v) => isEmail(v),
      // },
    },
    tell: {
      type: String,
      unique: true,
      validator: function (v) {
        return /7\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid tell!`
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    godMode: {
      type: Boolean,
      required: false,
      default: false,
    },
    lock: {
      type: Boolean,
      required: false,
      default: false,
    },
    roleGlobal: {
      type: String,
      minLength: 2,
      maxLength: 30,
    },
    roleLocal: {
      type: String,
      minLength: 2,
      maxLength: 30,
    },
    authorId: {
      // type: Schema.Types.ObjectId,
      type: String,
      // ref: 'User',
    },
    placeId: {
      type: String,
      minLength: 2,
      maxLength: 30,
    },
  },
  {
    versionKey: false,
    timestamps: true},
);


exports.User = mongoose.model('User', userShema);

