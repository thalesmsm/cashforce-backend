const { providers } = require('../database/models');

const getProvidersById = async (id) => {
  const result = await providers.findOne({
    where: { id },
    include: [
      'cnpj',
    ],
    attributes: [
      'id',
      'name',
      'tradingName',
    ],
  });

  return result;
};

module.exports = {
  getProvidersById,
};