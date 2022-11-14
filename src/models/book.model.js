import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
    {
        author: {
            type: String,
            required: true,
        },
        bookName: {
            type: String,
            required: true,
        },
        bookImage: {
            type: String,
        },
        description: {
            type: String,
            required: true,
        },
        discountPrice: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        quantity: {
            type: String
        }
    },
    {
        timestamps: true
    }
);
export default model('Book', bookSchema);
