import express from 'express';
import * as bookController from '../controllers/book.controller';
import { BookValidator } from '../validators/user.validator';
import { userAuth} from '../middlewares/auth.middleware';
// import { checkCache } from '../middlewares/redis.middleware';


const router = express.Router();

//route to get all books
router.get('/getallBook', userAuth, bookController.getAllBook);

// route to get a book by id 
router.get("/:_id", bookController.getBook);


export default router;


