const request = require('request');
const {
    getVehicleInfo
} = require('../gets/gets.js');

const standardizeVehicleInfo = function(info) {
    let doorCount;
    if (info.data.fourDoorSedan.value.toLowerCase() === 'true') {
        doorCount = 4;
        // Currently the only possibilities are 4 door or two door.
    } else {
        doorCount = 2;
    }

    return  {
        "vin": info.data.vin.value,
        "color": info.data.color.value,
        "doorCount": doorCount,
        "driveTrain": info.data.driveTrain.value
    };
};

module.exports = function(req, res) {
    getVehicleInfo(req.params.id)
        .then(info => {
            res.send(standardizeVehicleInfo(info));
        })
        .catch(err => {
            res.status(400).send(err);
        });
};
