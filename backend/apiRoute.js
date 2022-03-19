const express = require('express');

const router = express.Router();

router.post('/submitPayment', (req, res) => {
    console.log('hello');
});

module.exports = router;