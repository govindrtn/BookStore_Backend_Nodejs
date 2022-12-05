"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _string = _interopRequireDefault(require("@hapi/joi/lib/types/string"));
var _mongoose = require("mongoose");
var customerSchema = new _mongoose.Schema({
  userId: {
    type: String
  },
  customer: [{
    addressType: {
      type: String
    },
    fullAddress: {
      type: String
    },
    city: {
      type: String
    },
    landmark: {
      type: String
    },
    state: {
      type: String
    },
    name: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    pincode: {
      type: String
    },
    locality: {
      type: String
    }
  }]
});
var _default = (0, _mongoose.model)('Customer', customerSchema);
exports["default"] = _default;