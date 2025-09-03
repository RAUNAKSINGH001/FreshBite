import {User} from '../db/index.js'
import {Router} from "express"
import {userMiddlewares} from '../middleware/user.js'
const userRouter = Router();
export default userRouter;