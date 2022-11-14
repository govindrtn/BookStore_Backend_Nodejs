import User from '../models/user.model';
import * as  utilServices from '../utils/sendMail';
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// route to create register a user
export const signUp = async (body) => {
  console.log("request body ---------> ", body);
  console.log("before hashing ---------> ", body.password);
  const result = await User.findOne(
    {
      email: body.email,
    }
  );
  if (result != null) {
    throw new Error("user is already here .....")
  }
  else {
    const saltRound = 11;
    const hashPassword = bcrypt.hashSync(body.password, saltRound)
    const data = await User.create(
      {
        fullName: body.fullName,
        email: body.email,
        password: hashPassword,
        mobile:body.mobile
      }
    );
    console.log("after hashing ---------> ", body.password);
    return data;
  }
};

// route to login user 
export const signIn = async (body) => {
  console.log("user login  body  ------------>", body);
  const data = await User.findOne({ email: body.email });
  if (data != null) {
    const isValid = bcrypt.compareSync(body.password, data.password)
    if (isValid) {
      let token = jwt.sign({
        fullName:data.fullName,
        email: data.email,
        mobile: data.mobile,
        _id:data._id
      }, process.env.SECRET_KEY)
      console.log("Login successfully......");
      return token;
    }
    else {
      throw new Error("invalid pasword......")
    }
  }
  else {
    throw new Error("invalid email id......")
  }
};

//route to forget password
export const forgetPassword = async (body) => {
  const data = await User.findOne(
    {
      email: body.email,
    });
  if (data) {
    let Token = jwt.sign({ email : data.email,id:data._id }, process.env.NEW_SECRET_KEY)
    console.log("new token ---------->  ", Token)
    // let result = await utilServices.sendMail(data.email, Token)
    let result = await utilServices.sendMail(data.email,Token)
    return result;
  }
  else {
    throw new Error("email id not match...")
  }
};



// route to forget password 
export const resetPassword = async (body) => {
  const saltRound = 10;
  const newHashPassword = await bcrypt.hashSync(body.password, saltRound);
  const data = await User.findOneAndUpdate(
    {
      email: body.email
    },
    {
      password: newHashPassword
    },
    {
      new: true
    }
  )
  return data;
};




