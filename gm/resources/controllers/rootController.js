const request = require('request');
const {
    getVehicleInfo
} = require('../gets/gets.js');

module.exports = function(req, res) {
    getVehicleInfo(req.params.id)
        .then(info => {
            res.send(info);
        })
        .catch(err => {
            res.status(400).send(err);
        });
};
