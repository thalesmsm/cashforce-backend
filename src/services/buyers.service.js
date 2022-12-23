const { buyers } = require('../database/models');

const getBuyers = async () => {
  const result = await buyers.findAll();

  return result;
};

module.exports = {
  getBuyers,
};