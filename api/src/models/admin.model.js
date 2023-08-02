const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
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

    password: {
        type: String,
        required: true,
        min: 6,
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
    }
})