const express = require('express');
const cors = require('cors');
const ordersRouter = require('../routers/orders.router');

const app = express();

app.use(cors());
app.use(express.json());

app.use(ordersRouter);

module.exports = app;
