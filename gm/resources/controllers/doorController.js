const request = require('request');
const {
    getSecurityStatus
} = require('../gets/gets.js');

const standardizeDoorInfo = function(info) {
    return info.data.doors.values.map(door => {
        let locked = door.locked.value.toLowerCase() === 'true';
        return {
            location: door.location.value,
            locked: locked
        };
    });
};

module.exports = function(req, res) {
    getSecurityStatus(req.params.id)
        .then(info => {
            res.send(standardizeDoorInfo(info));
        })
        .catch(err => {
            res.status(400).send(err);
        });
};
