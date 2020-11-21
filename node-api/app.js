const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

const playlistRoute = require('./routes/playlist');

app.use('/playlist', playlistRoute);

app.get('/', (req, res) => {
  res.send('We are on home');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('Connected to DB!')
);

app.listen(3000);
