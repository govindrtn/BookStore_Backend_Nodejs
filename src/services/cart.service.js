import Book from '../models/book.model';
import Cart from '../models/cart.model';

 
export const addCart = async (_id, body) => {
    console.log("body user id ------------------------->", body);
    const bookAvailable = await Book.findById(_id);
    if (bookAvailable) {
        const exitsingBookCart = await Cart.findOne({ userId: body.userId })
        let book = {
            productId: bookAvailable._id,
            description: bookAvailable.description,
            bookName: bookAvailable.bookName,
            author: bookAvailable.author,
            quantity: 1,
            price: bookAvailable.price
        }   
        if (exitsingBookCart !== null) {
            for (let i = 0; i < exitsingBookCart.books.length; i++) {
                if (exitsingBookCart.books[i].productId === _id) {
                    exitsingBookCart.books[i].quantity += 1
                }
            }
            exitsingBookCart.books.push(book)
            let AddbookCart = await Cart.findOneAndUpdate(
                {
                    userId:body.userId
                },
                {
                    books:exitsingBookCart.books
                },
                {
                    new:true
                }
            )
            return AddbookCart;
        }
        else {
            let newCart = Cart.create(
                {
                    userId: body.userId,
                    books: [book]
                }
            )
            return newCart;
        }
    }
    else {
        throw new Error("book dose  not exist in book store...")
    }
};

export const updateQuantity = async (_id, body) => {
    const cart = await Cart.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        quantity : 1
      },
      {
        new: true
      }
    );
    return cart;
  };





//get all cart items
export const getAllCart = async () => {
    const cart = await Cart.find();
    if (cart) {
        return cart;
    }
    else {
        throw new Error("nothing in cart ...")
    }

};

// Delete Cart book
export const deleteCart = async (_id) => {
    await Cart.findByIdAndDelete(_id);
    return '';
  };




















































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
