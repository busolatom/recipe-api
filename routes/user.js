import { Router } from "express";
import { register } from "../controllers/user_auth.js";

// Create Router
const userRouter = Router();

// Define routes
userRouter.post('/register', register);

// Export router
export default userRouter