const express = require('express');
const mongoose = require('mongoose');
const Payment = require('./paymentSchema');

const router = express.Router();

// @route       POST api/submitPayment
// @request     { CardNumber, ExpDate, Cvv, Amount }
// @response    { RequestId, Amount }
// @access      PUBLIC
router.post('/submitPayment', (req, res) => {
    const newPayment = new Payment(req.body);
    
    newPayment
        .save()
        .then(payment => {
            const { _id: RequestId, Amount } = payment;
            res.status(200).json({ RequestId, Amount });
        })
        .catch(err => {
            res.status(400).json({ err });
        }); // #
});

module.exports = router;