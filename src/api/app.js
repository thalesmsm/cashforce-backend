const express = require('express');
const cors = require('cors');
const OrdersController = require('../controllers/orders.controller');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/orders', OrdersController.getOrders);

module.exports = app;
