const { orders, buyers, providers } = require('../database/models');

const getOrders = async () => {
  const result = await orders.findAll({
    include: [
      { model: buyers, as: 'buyer', attributes: ['name'] },
      { model: providers, as: 'provider', attributes: ['name', 'id'] },
    ],
    attributes: [
      'id',
      'nNf',
      'value',
      'emissionDate',
      'orderStatusBuyer',
    ],
  });

  return result;
};

module.exports = {
  getOrders,
};