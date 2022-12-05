import HttpStatus from 'http-status-codes';
import * as CustomerService from '../services/customer.service';

// get all Book
export const createCustomer = async (req, res, next) => {
  try {
    const data = await CustomerService.createCustomer(req.body);
    console.log("create customer data ----> ". data)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'costumer created successfully.....'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
  }
};



export const getAllCustomer= async (req, res, next) => {
  try {
    const data = await CustomerService.getAllCustomer(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: "All costumer fetched successfully"
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};






