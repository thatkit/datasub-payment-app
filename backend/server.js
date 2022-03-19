const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './backend/.env' });

const app = express();

app.use(express.json());
app.use('/api', require('./apiRoute'));

mongoose
    .connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.fmalu.mongodb.net/datasub-payment-app?retryWrites=true&w=majority`)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// # useless clg's

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to ${port}`));