import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

// get all Book
export const addCart = async (req, res, next) => {
  try {
    const data = await CartService.addCart(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'book added in Cart successfully.....'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
  }
};



export const getAllCart = async (req, res, next) => {
  try {
    const data = await CartService.getAllCart(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: "All Cart Book's fetched successfully"
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};


// delete Cart book
export const deleteCart = async (req, res, next) => {
  try {
    await CartService.deleteCart(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Cart Book deleted successfully.......'
    });
    // console.log("Note Deleted..... ")
  } catch (error) {
    next(error);
  }
};


