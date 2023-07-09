const { Schema, model } = require("mongoose");

const tableShema = new Schema(
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
    placeId: {
      type: String,
      minLength: 2,
      maxLength: 30,
    },
    description: {
      type: String,
      minLength: 2,
      maxLength: 250,
    },
  },
  {
    versionKey: false,
    timestamps: true},
);

exports.Table = model('Table', tableShema);

