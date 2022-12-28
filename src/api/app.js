const express = require('express');
const cors = require('cors');
const ordersRouter = require('../routers/orders.router');
const errorHandler = require('../middlewares/errorHandler.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use(ordersRouter);

app.use(errorHandler);
module.exports = app;
