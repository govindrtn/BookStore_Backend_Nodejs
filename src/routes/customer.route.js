
import express from 'express';
import * as customerController from '../controllers/customer.controller';
import { CustomerValidator } from '../validators/user.validator';
import { userAuth} from '../middlewares/auth.middleware';


const router = express.Router();

//route to Add book into Cart
router.post('/createCustomer', userAuth, customerController.createCustomer);

//route to get all Cart items
router.get('/getAllCustomer',userAuth, customerController.getAllCustomer);

export default router;


  // "addressType":"parmennt",
  //   "fullAddress":"maithil house ratanpur girdhsri",
  //   "city":"bhopal",
  //   "landmark":"mata temple",
  //   "state":"punjab",
  //   "name":"govind maithil",
  //   "phoneNumber":"86024425245",
  //   "pincode":"464662",
  //   "locality":"sanchi"