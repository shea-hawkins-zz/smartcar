// This defines the top-level router for the API service. 
// This is the location where authentication, vehicle, and other routes
// can be added. 
const router = require('express').Router();
const rootController = require('./resources/controllers/rootController.js');
const doorController = require('./resources/controllers/doorController.js');

router.get('/:id/doors', doorController);

router.get('/:id', rootController);

module.exports = router;
