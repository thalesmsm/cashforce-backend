const ProvidersService = require('../services/providers.service');

const getProvidersById = async (req, res) => {
  const result = await ProvidersService.getProvidersById(req.params.id);

  if (!result) {
    return res.status(404).json({ message: 'User Not found' });
  }
  
  return res.status(200).json(result);
};

module.exports = {
  getProvidersById,
};