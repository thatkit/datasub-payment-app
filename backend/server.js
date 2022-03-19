const express = require('express');

const app = express();

app.use('/api', require('./apiRoute'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to ${port}`));