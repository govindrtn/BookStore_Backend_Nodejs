"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCart = exports.deleteCart = exports.addCart = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _book = _interopRequireDefault(require("../models/book.model"));
var _cart = _interopRequireDefault(require("../models/cart.model"));
var addCart = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_id, body) {
    var bookAvailable, exitsingBookCart, book, i, AddbookCart, newCart;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("body user id ------------------------->", body);
            _context.next = 3;
            return _book["default"].findById(_id);
          case 3:
            bookAvailable = _context.sent;
            if (!bookAvailable) {
              _context.next = 22;
              break;
            }
            _context.next = 7;
            return _cart["default"].findOne({
              userId: body.userId
            });
          case 7:
            exitsingBookCart = _context.sent;
            book = {
              productId: bookAvailable._id,
              description: bookAvailable.description,
              bookName: bookAvailable.bookName,
              author: bookAvailable.author,
              quantity: 1,
              price: bookAvailable.price
            };
            if (!(exitsingBookCart !== null)) {
              _context.next = 18;
              break;
            }
            for (i = 0; i < exitsingBookCart.books.length; i++) {
              if (exitsingBookCart.books[i].productId === _id) {
                exitsingBookCart.books[i].quantity += 1;
              }
            }
            exitsingBookCart.books.push(book);
            _context.next = 14;
            return _cart["default"].findOneAndUpdate({
              userId: body.userId
            }, {
              books: exitsingBookCart.books
            }, {
              "new": true
            });
          case 14:
            AddbookCart = _context.sent;
            return _context.abrupt("return", AddbookCart);
          case 18:
            newCart = _cart["default"].create({
              userId: body.userId,
              books: [book]
            });
            return _context.abrupt("return", newCart);
          case 20:
            _context.next = 23;
            break;
          case 22:
            throw new Error("book dose  not exist in book store...");
          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function addCart(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//get all cart items
exports.addCart = addCart;
var getAllCart = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var cart;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _cart["default"].find();
          case 2:
            cart = _context2.sent;
            if (!cart) {
              _context2.next = 7;
              break;
            }
            return _context2.abrupt("return", cart);
          case 7:
            throw new Error("nothing in cart ...");
          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getAllCart() {
    return _ref2.apply(this, arguments);
  };
}();

// Delete Cart book
exports.getAllCart = getAllCart;
var deleteCart = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _cart["default"].findByIdAndDelete(id);
          case 2:
            return _context3.abrupt("return", '');
          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function deleteCart(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

//   export const addCart = async (_id, body) => {
//     const bookAvailable = await Book.findById(_id);
//     if (bookAvailable) {
//         const exitsingBookCart = await Cart.findOne({ userId: body.userId })
//         let book = {
//             productId: bookAvailable._id,
//             description: bookAvailable.description,
//             bookName: bookAvailable.bookName,
//             author: bookAvailable.author,
//             quantity:1,
//             price: bookAvailable.price
//         }
//         if (exitsingBookCart) {
//             exitsingBookCart.books.push(book)
//             let AddbookCart = await Cart.findOneAndUpdate(
//                 {
//                     userId: body.userId
//                 },
//                 {
//                     books: exitsingBookCart.books
//                 },
//                 {
//                     quantity:exitsingBookCart.quantity++
//                 },
//                 {
//                     new: true
//                 }
//             )
//             return AddbookCart;
//         }
//         else {
//             let newCart = Cart.create(
//                 {userId: body.userId,
//                 books: [book]}
//                 )
//             return newCart;
//         }
//     }
//     else {
//         throw new Error("book dose  not exist in book store...")
//     }
// };
exports.deleteCart = deleteCart;