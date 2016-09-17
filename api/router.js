// This defines the top-level router for the API service. 
// This is the location where authentication, vehicle, and other routes
// can be added. 
const router = require('express').Router();
const vehicleRouter = require('./resources/vehicles/vehicleRouter.js');

router.use('/vehicle', vehicleRouter);

router.use('/*', (req, res) => {
    res.sendStatus(400);
});

module.exports = router;
