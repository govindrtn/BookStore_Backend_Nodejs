"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appErrorHandler = appErrorHandler;
exports.genericErrorHandler = genericErrorHandler;
exports.notFound = notFound;
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var _logger = _interopRequireDefault(require("../config/logger"));
function notFound(req, res) {
  res.status(_httpStatusCodes["default"].NOT_FOUND).json({
    code: _httpStatusCodes["default"].NOT_FOUND,
    message: 'Ooops, route not found'
  });
}
function appErrorHandler(err, req, res, next) {
  if (err.code && typeof err.code === 'number') {
    _logger["default"].error("\n      status - ".concat(err.code, "\n      message - ").concat(err.message, " \n      url - ").concat(req.originalUrl, " \n      method - ").concat(req.method, " \n      IP - ").concat(req.ip, "\n    "));
    res.status(err.code).json({
      code: err.code,
      message: err.message
    });
  } else {
    next(err);
  }
}
function genericErrorHandler(err, req, res, next) {
  _logger["default"].error("\n    status - ".concat(_httpStatusCodes["default"].INTERNAL_SERVER_ERROR, " \n    message - ").concat(err.stack, " \n    url - ").concat(req.originalUrl, " \n    method - ").concat(req.method, " \n    IP - ").concat(req.ip, "\n  "));
  res.status(_httpStatusCodes["default"].INTERNAL_SERVER_ERROR).json({
    code: _httpStatusCodes["default"].INTERNAL_SERVER_ERROR,
    data: '',
    message: err.message
  });
}