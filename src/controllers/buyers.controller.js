const buyersService = require('../services/buyers.service');

const getBuyers = async (_req, res) => {
  const result = await buyersService.getBuyers();

  return res.status(200).json(result);
};

module.exports = {
  getBuyers,
};