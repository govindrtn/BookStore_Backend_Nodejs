import express from 'express';
import * as wishlistController from '../controllers/wishlist.controller';
import { userAuth} from '../middlewares/auth.middleware';


const router = express.Router();
//route to Add book into Cart
router.post('/:_id',userAuth, wishlistController.addWishList);

//route to get all Cart items
router.get('/getAllwishList',userAuth,wishlistController.getAllWishlist);

router.delete('/:_id',userAuth, wishlistController.deleteWishlist);

export default router;