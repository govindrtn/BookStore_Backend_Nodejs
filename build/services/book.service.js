"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBook = exports.getAllBook = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _book = _interopRequireDefault(require("../models/book.model"));
// import { client } from '../config/redisDataBase';

//get all Book 
var getAllBook = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var book;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _book["default"].find();
          case 2:
            book = _context.sent;
            if (!book) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", book);
          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function getAllBook() {
    return _ref.apply(this, arguments);
  };
}();

//get a Book 
exports.getAllBook = getAllBook;
var getBook = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var book;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _book["default"].findById(id);
          case 2:
            book = _context2.sent;
            return _context2.abrupt("return", book);
          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getBook(_x) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getBook = getBook;