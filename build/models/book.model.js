"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var bookSchema = new _mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  bookName: {
    type: String,
    required: true
  },
  bookImage: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  discountPrice: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  quantity: {
    type: String
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Book', bookSchema);
exports["default"] = _default;