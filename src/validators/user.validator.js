import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    mobile: Joi.string().min(10).required(),

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};


export const BookValidator = (req, res, next) => {
  const schema = Joi.object({
    author: Joi.string().required(),
    bookImage: Joi.string().required(),
    bookName: Joi.string().required(),
    description: Joi.string().required(),
    discountPrice: Joi.string().required(),
    price: Joi.string().required(),
    quantity: Joi.string().optional()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  } else {
    next();
  }
};


export const CustomerValidator = (req, res, next) => {
  const schema = Joi.object({
    addressType:Joi.string().required(),
    fullAddress:Joi.string().required(),
    city: Joi.string().required(),
    landmark: Joi.string().required(),
    state: Joi.string().required(),
    name: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    pincode: Joi.string().required(),
    locality: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  } else {
    next();
  }
};

