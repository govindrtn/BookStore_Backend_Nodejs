
import book from '../models/book.model';
import wishList from '../models/wishlist.model';

//get all Book 
export const addWishList = async (_id, body) => {
    console.log("wishlist------------------->", body);
    const bookAvailable = await book.findById(_id);
    if (bookAvailable) {
        const exitsingBookCart = await wishList.findOne({ userId: body.userId })
        let book = {
            productId: bookAvailable._id,
            description: bookAvailable.description,
            bookName: bookAvailable.bookName,
            author: bookAvailable.author,
            price: bookAvailable.price
        }
        if (exitsingBookCart) {
            exitsingBookCart.books.push(book)
            let AddbookWishList = await wishList.findOneAndUpdate(
                {
                    userId: body.userId,
                },
                {
                    books: exitsingBookCart.books,
                },
                {
                    new: true
                }
            )
            return AddbookWishList;
        }
        else {
            let newCart = wishList.create(
                {userId: body.userId,
                books: [book]}
                )
            return newCart;
        }
    }
    else {
        throw new Error("book dose  not exist in book store...")
    }
};


//get all cart items
export const getAllWishlist = async () => {
    const wishlist = await wishList.find();
    if (wishlist) {
      return wishlist;
    }
    else {
        throw new Error("nothing in wishList ....")
    }

  };


  // Delete Cart book
export const deleteWishlist = async (id) => {
    await wishList.findByIdAndDelete(id);
    return '';
  };