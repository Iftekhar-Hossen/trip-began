const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        min: 3
    },
    last_name: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        min: 10,

    },
    verified: {
        email: {
            type: Boolean,
            default: false
        },
        phone: {
            type: Boolean,
            default: false
        }
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
})