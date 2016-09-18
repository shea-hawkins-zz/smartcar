// Top level router maps the smartcar routes to the gm controllers.

const router = require('express').Router();
const rootController = require('./resources/controllers/rootController.js');
const doorController = require('./resources/controllers/doorController.js');
const fuelController = require('./resources/controllers/fuelController.js');
const batteryController = require('./resources/controllers/batteryController.js');
const engineController = require('./resources/controllers/engineController.js');

router.get('/:id/doors', doorController);
router.get('/:id/fuel', fuelController);
router.get('/:id/battery', batteryController);
router.get('/:id', rootController);

router.post('/:id/engine', engineController);

module.exports = router;
