// Routes for user management
import express from "express";
// Import controller functions
import { postuser ,getuser,deleteuser,getuserById,updateuser} from "../controller/user.js";
// Create a router instance
let router = express.Router();

// Route to create a new user
router.post("/create/User", postuser);
// Route to get all users 
router.get("/get/users", getuser);
// Route to delete a user by ID
router.delete("/delete/users/:id", deleteuser);
//get user by id
router.get("/get/users/:id", getuserById);
//update user by id
router.put("/update/users/:id", updateuser);
// Export the router


// Export the router
export default router;