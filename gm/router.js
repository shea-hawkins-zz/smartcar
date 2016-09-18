const router = require('express').Router();
const rootController = require('./resources/controllers/rootController.js');
const doorController = require('./resources/controllers/doorController.js');
const {
    batteryController,
    fuelController
} = require('./resources/controllers/energyControllers.js');

router.get('/:id/doors', doorController);
router.get('/:id/fuel', fuelController);
router.get('/:id/battery', batteryController);
router.get('/:id', rootController);

module.exports = router;
