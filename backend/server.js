const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './backend/.env' });

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', require('./apiRoute'));

mongoose
    .connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.fmalu.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Serve static assets in PRODUCTION
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
    
app.listen(port, () => console.log(`Listening to ${port}`));