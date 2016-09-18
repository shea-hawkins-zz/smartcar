const request = require('request');
const {
    formatDoorInfo
} = require('../util/format.js')
const {
    getSecurityStatus
} = require('../gets/gets.js');

module.exports = function(req, res) {
    getSecurityStatus(req.params.id)
        .then(info => {
            res.send(formatDoorInfo(info));
        })
        .catch(err => {
            res.status(400).send(err);
        });
};
