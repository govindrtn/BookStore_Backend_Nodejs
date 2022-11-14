// import { client } from '../config/redisDataBase';
import Book from '../models/book.model';

//get all Book 
export const getAllBook = async () => {
  const book = await Book.find();
  if (book) {
    // await client.set('getall', JSON.stringify(book))
    return book;
  }
};

//get a Book 
export const getBook = async (id) => {
  const book = await Book.findById(id);
  return book;
};




