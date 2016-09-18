module.exports.formatDoorInfo = function(info) {
    return info.data.doors.values.map(door => {
        let locked = door.locked.value.toLowerCase() === 'true';
        return {
            location: door.location.value,
            locked: locked
        };
    });
};

module.exports.formatFuelInfo = function(data, fuelType) {
    let percent;
    if (data[fuelType]['type'] === "Number") {
        percent = Number(data[fuelType]['value']);
    } else {
        percent = null;
    }
    return { percent };
};

module.exports.formatVehicleInfo = function(info) {
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
