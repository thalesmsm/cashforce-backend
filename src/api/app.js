const express = require('express');
const cors = require('cors');
const buyersController = require('../controllers/buyers.controller');

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.static('public'));

app.get('/buyers', buyersController.getBuyers);

module.exports = app;
