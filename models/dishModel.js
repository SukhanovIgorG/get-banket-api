const { Schema, model } = require("mongoose");

const dishShema = new Schema(
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
    department: {
      // type: Schema.Types.ObjectId,
      type: String,
      // ref: 'Department',
      require: true
    },
    cookingTime: {
      type: Number,
      required: true,
      default: 0
    },
    weight: {
      type: Number,
      required: true,
      default: 0
    },
    structure: [
      {
        name: {
          type: String,
          minLength: 2,
          maxLength: 30,
        },
        count: {
          type: Number,
          required: true,
          default: 0
        },
        description: {
          type: String,
          minLength: 2,
          maxLength: 30,
        }
      }
    ],
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


exports.Dish = model('Dish', dishShema);

