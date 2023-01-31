import express from "express";
import {loginController, registerController, testController} from '../controllers/auth-controller.js'
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

// router object

const router=express.Router()

// routing
// Register || POST
router.post('/register',registerController)

// Login || POST
router.post('/login',loginController)

// test
router.get('/test',requireSignIn,isAdmin,testController)

export default router;