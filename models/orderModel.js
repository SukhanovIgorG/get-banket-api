const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = require("mongoose");
const { Types } = require('mongoose');

const orderShema = new mongoose.Schema(
  {
    banquetNum: {
      type: Number,
      minLength: 1,
      maxLength: 10,
      required: true,
    },
    date: {
      type: Types.Date,
      required: false
    },
    servingCold: {
      type: Types.Date,
      required: false
    },
    servingHot: {
      type: Types.Date,
      required: false
    },
    servingGrill: {
      type: Types.Date,
      required: false
    },
    guestCount: {
      type: Number,
      minLength: 1,
      maxLength: 5,
      required: false,
    },
    description: {
      type: String,
      required: false,
      minLength: 1,
      maxLength: 500,
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
    updates: [
      {
        createdAt: Types.Date,
        description: String,
        author: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: false, // TODO: true
        }
      }
    ],
    location: {
      type: Schema.Types.ObjectId,
      // ref: 'Location',
      required: false, // TODO: true
    },
    tables: [
      {
        author: {
          type: Schema.Types.ObjectId,
          ref: 'Table',
          required: false, // TODO: true
        }
      }
    ],
    customer: {
      name: String,
      tell: Number,
      email: {
        type: String,
        required: false,
        validate: {
          validator: validator.isEmail,
          message: 'is not a valid email'
        }
      },
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    prepayment: {
      type: Number,
      required: true,
      default: 0,
    },
    payment: {
      type: Number,
      required: true,
      default: 0,
    },
    complete: {
      type: Boolean,
      required: true,
      default: false,
    },
    dishes: {
      cold: {
        // type: Schema.Types.ObjectId,
        type: String,
        // ref: 'Dish',
      },
      hot: {
        // type: Schema.Types.ObjectId,
        type: String,
        // ref: 'Dish',
      },
      grill: {
        // type: Schema.Types.ObjectId,
        type: String,
        // ref: 'Dish',
      },
      bar:  {
        // type: Schema.Types.ObjectId,
        type: String,
        // ref: 'Dish',
      },
      other: {
        // type: Schema.Types.ObjectId,
        type: String,
        // ref: 'Dish',
      },
    },
    waiters: [
      {
        // type: Schema.Types.ObjectId,
        type: String,
        // ref: 'User',
      }
    ]
  },
  {
    versionKey: false,
    timestamps: true},
);


exports.Order = mongoose.model('Order', orderShema);

