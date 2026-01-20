// Import the User model
import User from "../model/user.js";

// Create a new user
let postuser = async (req, res) => {
    try {
        let  { username, email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required",success:false } );
        }
        let  exitingUser = await User.findOne({ email,email });
        if (exitingUser) {
            return res.status(409).json({ message: "Email already exists",success:false });
        }
        let newUser = new User({ username, email, password });
        await newUser.save();
        return res.status(201).json({ message: "User created successfully",success:true });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error",success:false });

      
    }
};
  
// Get all users
let getuser = async (req, res) => {
    try {
        let users = await User.find({});    
        return res.status(200).json({ users: users, success: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

// Delete a user by ID
let deleteuser = async (req, res) => {
    try {
        let userId = req.params.id;
        let deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        return res.status(200).json({ message: "User deleted successfully", success: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

// Get a user by ID
let getuserById = async (req, res) => {
    try {
        let userId = req.params.id;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }   
        return res.status(200).json({ user: user, success: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false });
    }   
};

// Update a user by ID
let updateuser = async (req, res) => {
    try {
        let userId = req.params.id;
        let updates = req.body;
        let updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
        return res.status(200).json({ user: updatedUser, success: true });
    } 
    catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false });
    }   
};

// Export the controller functions
export { postuser, getuser, deleteuser,getuserById,updateuser };   