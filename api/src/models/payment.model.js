const mongoose = require("mongoose")

const PaymentSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    amount: {
        type: Number,
        required: true,
        min: 1
    },
    payment_type: {
        type: String,
        required: true,
        min: 3
    },
    payment_status: {
        type: String,
        required: true,
        min: 3
    },
    payment_date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})
module.exports = PaymentModel = mongoose.model('payment', PaymentSchema)