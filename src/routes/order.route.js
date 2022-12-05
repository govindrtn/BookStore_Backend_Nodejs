import express from 'express';
import * as orderController from '../controllers/order.controller';
import { userAuth} from '../middlewares/auth.middleware';


const router = express.Router();

//route to Add book into Cart
router.post('/addOrder',userAuth, orderController.AddOrder);


export default router;