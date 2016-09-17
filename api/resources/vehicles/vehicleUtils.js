const routes = {
    'GET': {
        'doors': true,
        'fuel': true,
        'battery': true,
        'engine': true,
        '': true
    }
};


module.exports.determineVehicleMake = function(id) {
    // This utility could identify the make by the length of the ID/any other manufacturer
    // specific attributes.

    // At the moment, the service assumes that all inbound IDs are gm.
    return 'gm';
};

module.exports.determineValidRoute = function(method, route) {
    return routes[method][route];
};

module.exports.getErrorMessage = function(err) {
    return 'Things are bad.';
};
