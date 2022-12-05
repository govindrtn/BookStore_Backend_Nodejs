import HttpStatus from 'http-status-codes';
import * as OrderService from '../services/order.service';

// get all Book
export const AddOrder = async (req, res, next) => {
  try {
    const data = await OrderService.AddOrder(req.body);
    console.log("create customer data ----> ". data)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'order placed. successfully.....'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
  }
};


