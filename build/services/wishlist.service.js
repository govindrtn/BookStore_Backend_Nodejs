"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllWishlist = exports.addWishList = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _book2 = _interopRequireDefault(require("../models/book.model"));
var _wishlist = _interopRequireDefault(require("../models/wishlist.model"));
//get all Book 
var addWishList = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_id, body) {
    var bookAvailable, exitsingBookCart, _book, AddbookWishList, newCart;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("wishlist------------------->", body);
            _context.next = 3;
            return _book2["default"].findById(_id);
          case 3:
            bookAvailable = _context.sent;
            if (!bookAvailable) {
              _context.next = 21;
              break;
            }
            _context.next = 7;
            return _wishlist["default"].findOne({
              userId: body.userId
            });
          case 7:
            exitsingBookCart = _context.sent;
            _book = {
              productId: bookAvailable._id,
              description: bookAvailable.description,
              bookName: bookAvailable.bookName,
              author: bookAvailable.author,
              price: bookAvailable.price
            };
            if (!exitsingBookCart) {
              _context.next = 17;
              break;
            }
            exitsingBookCart.books.push(_book);
            _context.next = 13;
            return _wishlist["default"].findOneAndUpdate({
              userId: body.userId
            }, {
              books: exitsingBookCart.books
            }, {
              "new": true
            });
          case 13:
            AddbookWishList = _context.sent;
            return _context.abrupt("return", AddbookWishList);
          case 17:
            newCart = _wishlist["default"].create({
              userId: body.userId,
              books: [_book]
            });
            return _context.abrupt("return", newCart);
          case 19:
            _context.next = 22;
            break;
          case 21:
            throw new Error("book dose  not exist in book store...");
          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function addWishList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//get all cart items
exports.addWishList = addWishList;
var getAllWishlist = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var wishlist;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _wishlist["default"].find();
          case 2:
            wishlist = _context2.sent;
            if (!wishlist) {
              _context2.next = 7;
              break;
            }
            return _context2.abrupt("return", wishlist);
          case 7:
            throw new Error("nothing in wishList ....");
          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getAllWishlist() {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllWishlist = getAllWishlist;