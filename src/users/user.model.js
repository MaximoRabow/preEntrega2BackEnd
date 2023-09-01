import mongoose from "mongoose";

const userCollection = 'Users';

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
        required: true
    }
})

export const userModel = mongoose.model (userCollection, userSchema);