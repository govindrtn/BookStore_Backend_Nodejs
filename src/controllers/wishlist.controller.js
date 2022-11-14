import HttpStatus from 'http-status-codes';
import * as wishListService from '../services/wishlist.service';

// get all Book
export const addWishList = async (req, res, next) => {
  try {
    const data = await wishListService.addWishList(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'book added in WishList successfully.....'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
  }
};



export const getAllWishlist = async (req, res, next) => {
  try {
    const data = await wishListService.getAllWishlist(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: "All WishList Book's fetched successfully"
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};






