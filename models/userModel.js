const { Schema, model } = require("mongoose");

const userShema = new Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 50,
      required: true,
    },
    photo: {
      type: String,
      required: false
    },
    login: {
      type: String,
      minLength: 2,
      maxLength: 30,
      unique: true,
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
      minLength: 6,
      maxLength: 100,
    },
    lock: {
      type: Boolean,
      required: false,
      default: false,
    },
    role: {
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


exports.User = model('User', userShema);

