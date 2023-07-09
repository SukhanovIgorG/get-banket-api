const { Schema, model } = require("mongoose");

const departmentShema = new Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 30,
    },
    alias: {
      type: String,
      minLength: 2,
      maxLength: 30,
      require: true,
      default: 'other'
    },
    placeId: {
      type: Schema.Types.ObjectId,
      ref: "Place",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

exports.Department = model("Department", departmentShema);
