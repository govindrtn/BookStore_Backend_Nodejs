import { Schema, model } from 'mongoose';

const wishListSchema = new Schema(

{
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
      default: false
    }
})

export default model('wishList', wishListSchema);