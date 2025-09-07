import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "first name must be at least 3 characters"],
        maxLength: [30, "first name can't exceed 30 characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "last name must be at least 3 characters"],
        maxLength: [30, "last name can't exceed 30 characters"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "phone number must be at least 10 characters"],
        maxLength: [15, "phone number can't exceed 15 characters"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },        
});    

export const Reservation = mongoose.model("Reservation", reservationSchema);