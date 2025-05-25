import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

// Middleware to authenticate user
export const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Please login first" });
    }

    const decoded = jwt.verify(token, process.env.Jwt_Sec);

    const user = await User.findById(decoded._id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User no longer exists" });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Middleware to authorize admin
export const isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
