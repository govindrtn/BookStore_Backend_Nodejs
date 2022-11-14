import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { resetAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// route to SignUp a user
router.post('/signUp', newUserValidator,  userController.signUp);

// route to SignIn a user
router.post('/signIn', userController.signIn);

// route to forget password
router.post('/forget', userController.forgetPassword);

// route to reset password
router.post('/reset',resetAuth, userController.resetPassword);

export default router;
