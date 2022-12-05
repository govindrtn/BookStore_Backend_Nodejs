"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCustomer = exports.createCustomer = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _customer = _interopRequireDefault(require("../models/customer.model"));
var createCustomer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var customerDetails;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("customer user id ", body.userId);
            console.log("customer user id ", body);
            _context.next = 4;
            return _customer["default"].create({
              userId: body.userId,
              customer: [body]
            });
          case 4:
            customerDetails = _context.sent;
            if (!customerDetails) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", customerDetails);
          case 9:
            throw new Error("fill the correct details...");
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function createCustomer(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.createCustomer = createCustomer;
var getAllCustomer = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var customerData;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _customer["default"].find();
          case 2:
            customerData = _context2.sent;
            if (!customerData) {
              _context2.next = 7;
              break;
            }
            return _context2.abrupt("return", customerData);
          case 7:
            throw new Error("no customers ..................");
          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getAllCustomer(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllCustomer = getAllCustomer;