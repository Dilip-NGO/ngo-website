import express from "express";
import { isAuth, isAdmin } from "../middlewares/isAuth.js";
import {
  addLectures,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllStats,
  getAllUser,
  updateRole,
} from "../controllers/admin.js";
import { uploadFiles } from "../middlewares/multer.js";

const router = express.Router();

// Create a new course (Admins only)
router.post("/course/new", isAuth, isAdmin, uploadFiles, createCourse);

// Add lecture to a course (Admins only)
router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLectures);

// Delete a course by ID (Admins only)
router.delete("/course/:id", isAuth, isAdmin, deleteCourse);

// Delete a lecture by ID (Admins only)
router.delete("/lecture/:id", isAuth, isAdmin, deleteLecture);

// Get all dashboard stats (Admins only)
router.get("/stats", isAuth, isAdmin, getAllStats);

// Update user role (Allowed only for predefined email user)
router.put("/user/:id", isAuth, updateRole);

// Get all users except self (Admins only)
router.get("/users", isAuth, isAdmin, getAllUser);

export default router;
