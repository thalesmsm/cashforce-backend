const express = require('express');
const OrdersController = require('../controllers/orders.controller');

const ordersRouter = express();

ordersRouter.get('/orders', OrdersController.getOrders);

module.exports = ordersRouter;
