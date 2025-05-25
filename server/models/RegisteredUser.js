import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    mobileNumber: String,
    dateOfBirth: String,
    gender: String,
    address: String,
    classGrade: String,
    guardianName: String,
    guardianMobile: String,
  }, { timestamps: true });
  
export const RegisteredUser = mongoose.model('RegisteredUser', userSchema);