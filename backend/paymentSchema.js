const mongoose = require('mongoose');
// validation helpers
const {
    isStringLength,
    isNumber,
    isCorrectMMYYYFormat,
    isNotExpired,
    isTwoDigitsAfterDecimalPoint
} = require('./helpers/validation');

// reusable chunk
const stringRequired = {
    type: String,
    required: true
}

const PaymentSchema = new mongoose.Schema({

    CardNumber: {
        ...stringRequired,
        validate: [
            // validate length
            {
                validator: cardNumber => isStringLength(cardNumber, 16),
                message: props => `${props.value} is not a valid card number. Card number must contain 16 digits.`
            },
            // validate digits
            {
                validator: cardNumber => isNumber(cardNumber),
                message: props => `${props.value} is not a valid card number. Card number must contain only digits.`
            }
        ]
    },

    ExpDate: {
        ...stringRequired,
        validate: [
            // validate MM/YYYY format
            {
                validator: date => isCorrectMMYYYFormat(date),
                message: props => `${props.value} is not a valid date of expiry.`
            },
            // validate expiry date
            {
                validator: date => isNotExpired(date),
                message: () => 'The card is expired.'
            }
        ]
    },

    Cvv: {
        ...stringRequired,
        validate: [
            // validate length
            {
                validator: cvv => isStringLength(cvv, 3),
                message: props => `${props.value} is not a valid CVV number. CVV number must contain 3 digits.`
            },
            // validate digits
            {
                validator: cvv => isNumber(cvv),
                message: props => `${props.value} is not a valid CVV number. CVV number must contain only digits.`
            }
        ]
    },

    Amount: {
        type: Number,
        required: true,
        validate: [
            // validate for positive number
            {
                validator: data => data > 0,
                message: () => 'Amount must be a positive number'
            },
            // validate for decimal number with no more than 2 digits after the decimal point
            {
                validator: amount => isTwoDigitsAfterDecimalPoint(amount),
                message: () => 'There must be up to 2 digits after the decimal point.'
            }
        ]
    }

});

module.exports = Payment = mongoose.model('Payment', PaymentSchema);