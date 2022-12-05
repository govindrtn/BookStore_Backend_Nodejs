"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var wishListSchema = new _mongoose.Schema({
  userId: {
    type: String
  },
  books: [{
    productId: {
      type: String
    },
    description: {
      type: String
    },
    bookName: {
      type: String
    },
    bookImage: {
      type: String
    },
    author: {
      type: String
    },
    price: {
      type: Number
    }
  }],
  cart_total: {
    type: Number
  },
  isPurchased: {
    type: Boolean,
    "default": false
  }
});
var _default = (0, _mongoose.model)('wishList', wishListSchema);
exports["default"] = _default;