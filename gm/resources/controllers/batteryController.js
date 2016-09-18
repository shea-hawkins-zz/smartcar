// The general format of the gm controllers is 
    // 1) Import related actions/gets (as many as are required to gather 
    //    information pertinent to the smartcar route)
    // 2) Execute action/get
    // 3) Format response from server using formatting utility

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
            // Includes energy type in order to retrieve relevant percentage.
            res.send(formatFuelInfo(info, 'batteryLevel'));
        })
        .catch(err => {
            res.status(400).send(err);
        });
}
