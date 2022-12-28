const OrdersService = require('../services/orders.service');

const getOrders = async (_req, res) => {
  const result = await OrdersService.getOrders();

  if (!result) {
    return res.status(404).json({ message: 'Data Not found' });
  }
  
  return res.status(200).json(result);
};

module.exports = {
  getOrders,
};