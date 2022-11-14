import HttpStatus from 'http-status-codes';
import * as BookService from '../services/book.service';

// get all Book
export const getAllBook = async (req, res, next) => {
  try {
    const data = await BookService.getAllBook(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All Books fetched successfully.....'
    });
  } catch (error) {
    next(error);
  }
};

// get a Book
export const getBook = async (req, res, next) => {
  try {
    const data = await BookService.getBook(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book fetched successfully.....'
    });
  } catch (error) {
    next(error);
  }
};




