const request = require('request');
const router = require('express').Router();
const {
    determineVehicleMake,
    determineValidRoute,
    getErrorMessage
} = require('./vehicleUtils.js');

// This route works under the assumption that we will always
// be able to tell the manufacturer by the ID. It may be a good idea
// to add ':make'' as one of the required params to API calls.
// This will let us avoid id conflicts in the future if multiple manufacturers
// use the same format.
router.use('/:id', (req, res, next) => {
    const make = determineVehicleMake(req.params.id);
    if (make) {
        res.locals.make = make;
        next();
    } else {
        res.sendStatus(400);
    }
});

router.use('/:id/:route*?', (req, res) => {
    const route = req.params.route || '';
    const make = res.locals.make;
    const id = req.params.id;
    console.log(`http://smartcar-${make}/${id}/${route}`);
    if (determineValidRoute(req.method, route)) {
        // If the route is a valid Smartcar route, it will forward
        // the request to the appropriate translation service.
        // The translation service url is defined by the name of the service
        // in the docker-compose file.
        new Promise((resolve, reject) => {
            request({
                url: `http://smartcar-${make}/${id}/${route}`, 
                method: req.method,
                body: req.body,
                json: true
            }, (err, res) => {
                err ? reject(err) : resolve(res);
            });
        })
        .then(serviceRes => res.send(serviceRes.body))
        //.catch(err => res.send(getErrorMessage(err)));
        .catch(err => res.send(err));
    } else {
        res.sendStatus(400);
    }
});

router.use('/*', (req, res) => {
    res.sendStatus(400);
});


module.exports = router;