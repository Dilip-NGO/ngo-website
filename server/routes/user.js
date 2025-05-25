import express from "express";
import {
  forgotPassword,
  loginUser,
  myProfile,
  register,
  resetPassword,
  verifyUser,
} from "../controllers/user.js";
import { isAuth } from "../middlewares/isAuth.js";
import { addProgress, getYourProgress } from "../controllers/course.js";
import { registerUser, getAllUsers } from "../controllers/registeredUser.js";

const router = express.Router();

router.post("/user/register", register);
router.post("/user/verify", verifyUser);
router.post("/user/login", loginUser);
router.get("/user/me", isAuth, myProfile);
router.post("/user/forgot", forgotPassword);
router.post("/user/reset", resetPassword);
router.post("/user/progress", isAuth, addProgress);
router.get("/user/progress", isAuth, getYourProgress);
// POST to register user
router.post('/register', registerUser);
// GET all users
router.get('/users', getAllUsers);

export default router;
