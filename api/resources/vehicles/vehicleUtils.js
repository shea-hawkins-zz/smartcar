// Utilizes joi for input validation. The joi
// validation schema could be defined for the entire smartcar
// api and stored as an implementation file.
const joi = require('joi');
const routes = {
    'GET': {
        'doors': true,
        'fuel': true,
        'battery': true,
        '': true
    },
    'POST': {
        'engine': {
            // This section defines the required parameters in the body of the
            // post request for the related route.
            'schema': joi.object().keys({
                'action': joi.string().valid(['START', 'STOP'])
            })
        }
    }
};


module.exports.determineVehicleMake = function(id) {
    // This utility could identify the make by the length of the ID/any other manufacturer
    // specific attributes.

    // At the moment, the service assumes that all inbound IDs are gm.
    return 'gm';
};

module.exports.isValidInput = function(method, route, body) {
    if (method === 'GET') {
        return !!routes[method][route];
    } else if (method === 'POST') {
        // Validates route and input using joi
        return !!routes[method][route] && !joi.validate(body, routes[method][route].schema).error;
    }
};

