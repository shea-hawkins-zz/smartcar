const request = require('request');
const {
    getEnergy
} = require('../gets/gets.js');

const standardizeFuelInfo = function(data, fuelType) {
    let percent;
    if (data[fuelType]['type'] === "Number") {
        percent = Number(data[fuelType]['value']);
    } else {
        percent = null;
    }
    return { percent };
};

module.exports.fuelController = function(req, res) {
    getEnergy(req.params.id)
        .then(info => {
            res.send(standardizeFuelInfo(info.data, 'tankLevel'));
        })
        .catch(err => {
            console.log(err);
            res.status(400).send(err);
        });
};

module.exports.batteryController = function(req, res) {
    getEnergy(req.params.id)
        .then(info => {
            res.send(standardizeFuelInfo(info.data, 'batteryLevel'));
        })
        .catch(err => {
            res.status(400).send(err);
        });
}
