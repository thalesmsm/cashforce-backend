const express = require('express');
const providersController = require('../controllers/providers.controller');

const providersRouter = express();

providersRouter.get('/providers/:id', providersController.getProvidersById);

module.exports = providersRouter;
