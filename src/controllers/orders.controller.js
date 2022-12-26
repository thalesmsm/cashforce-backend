const OrdersService = require('../services/orders.service');

const getOrders = async (_req, res) => {
  const result = await OrdersService.getOrders();

  return res.status(200).json(result);
};

module.exports = {
  getOrders,
};