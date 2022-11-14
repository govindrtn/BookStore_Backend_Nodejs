import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth} from '../middlewares/auth.middleware';


const router = express.Router();

//route to Add book into Cart
router.post('/:_id', userAuth ,cartController.addCart);

//route to get all Cart items
router.get('/getAllCart',cartController.getAllCart);

// route to dete cart book
router.delete('/:_id', cartController.deleteCart);

export default router;