import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
    firstname: {
        type: String,
    }, 
    lastname: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,
		index: true,
    },
    age:{
        type: Number
    },
    password: {
        type: String,
    }
})

export const userModel = mongoose.model ('user', userSchema);