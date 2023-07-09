const { Schema, model } = require("mongoose");

const roomShema = new Schema(
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
    tables: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Table'
    }
    ],
  },
  {
    versionKey: false,
    timestamps: true},
);


exports.Room = model('Room', roomShema);

