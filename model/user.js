// User model definition
import mongoose from "mongoose";
// Define the user schema
const userSchema = new mongoose.Schema({

    name:
     { type: String
     },
    email:
     { type: String,
         required: true,
          unique: [true, "Email already exists"] ,
        lowercase: true, 
        trim: true },

    password:
     { type: String, 
        required: true ,
        minlength: [6, "Password must be at least 6 characters long"]
    },
    
},{ timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;