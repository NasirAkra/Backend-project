import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

let dbUrl=process.env.MONGODB_URL;


let connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB connected successfully");
  }
    catch (error) {
    console.error("MongoDB connection error:", error);
  
  }
};
export default connectDB;