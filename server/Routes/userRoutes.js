import express from 'express';
import { findUser, loginUser, registerUser, userList } from '../Controllers/userController.js';
//import { signUp, signIn , goggle, signOut} from '../controllers/auth.Controller.js';


const router = express.Router();

router.post("/register" , registerUser);
router.post("/login", loginUser);
router.get("/", userList)
router.get("/findUser/:userId", findUser);

export default router; 