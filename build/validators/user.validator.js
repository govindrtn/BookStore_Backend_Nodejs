"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newUserValidator = exports.CustomerValidator = exports.BookValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newUserValidator = function newUserValidator(req, res, next) {
  var schema = _joi["default"].object({
    fullName: _joi["default"].string().min(6).required(),
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().min(6).required(),
    mobile: _joi["default"].string().min(10).required()
  });
  var _schema$validate = schema.validate(req.body),
    error = _schema$validate.error,
    value = _schema$validate.value;
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
exports.newUserValidator = newUserValidator;
var BookValidator = function BookValidator(req, res, next) {
  var schema = _joi["default"].object({
    author: _joi["default"].string().required(),
    bookImage: _joi["default"].string().required(),
    bookName: _joi["default"].string().required(),
    description: _joi["default"].string().required(),
    discountPrice: _joi["default"].string().required(),
    price: _joi["default"].string().required(),
    quantity: _joi["default"].string().optional()
  });
  var _schema$validate2 = schema.validate(req.body),
    error = _schema$validate2.error,
    value = _schema$validate2.value;
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: "".concat(error)
    });
  } else {
    next();
  }
};
exports.BookValidator = BookValidator;
var CustomerValidator = function CustomerValidator(req, res, next) {
  var schema = _joi["default"].object({
    addressType: _joi["default"].string().required(),
    fullAddress: _joi["default"].string().required(),
    city: _joi["default"].string().required(),
    landmark: _joi["default"].string().required(),
    state: _joi["default"].string().required(),
    name: _joi["default"].string().required(),
    phoneNumber: _joi["default"].string().required(),
    pincode: _joi["default"].string().required(),
    locality: _joi["default"].string().required()
  });
  var _schema$validate3 = schema.validate(req.body),
    error = _schema$validate3.error,
    value = _schema$validate3.value;
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: "".concat(error)
    });
  } else {
    next();
  }
};
exports.CustomerValidator = CustomerValidator;