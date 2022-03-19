const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    CardNumber: {
        type: String,
        required: true
    },
    ExpDate: {
        type: String,
        required: true
    },
    Cvv: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    }
});

module.exports = Payment = mongoose.model('Payment', PaymentSchema);