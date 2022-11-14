
import express from 'express';
import * as customerController from '../controllers/customer.controller';
import { CustomerValidator } from '../validators/user.validator';
import { userAuth} from '../middlewares/auth.middleware';


const router = express.Router();

//route to Add book into Cart
router.post('/createCostumer',userAuth,CustomerValidator,customerController.createCustomer);

//route to get all Cart items
router.get('/getAllCostumer',customerController.getAllCustomer);

export default router;