const request = require('request');
const {
    formatFuelInfo
} = require('../util/format.js')
const {
    getEnergy
} = require('../gets/gets.js');

module.exports = function(req, res) {
    getEnergy(req.params.id)
        .then(info => {
            // Includes a switch in order to format to fuel information
            res.send(formatFuelInfo(info, 'tankLevel'));
        })
        .catch(err => {
            res.status(400).send(err);
        });
};
