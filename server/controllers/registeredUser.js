import { RegisteredUser } from "../models/RegisteredUser.js";

// Register new user (save form data)
export const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new RegisteredUser(userData);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Server error while registering user' });
  }
};

// Get all registered users (for admin dashboard)
export const getAllUsers = async (req, res) => {
  try {
    const users = await RegisteredUser.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Server error while fetching users' });
  }
};
