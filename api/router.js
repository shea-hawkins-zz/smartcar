// This defines the top-level router for the API service. 
// This is the location where authentication, vehicle, and other routes
// can be added. 
const router = require('express').Router();
const vehicleRouter = require('./resources/vehicles/vehicleRouter.js');

router.use('/vehicle', vehicleRouter);

router.post('/*', (req, res) => {
    res.send(400);
});

router.get('/*', (req, res) => {
    res.send(400);
});

module.exports = router;
