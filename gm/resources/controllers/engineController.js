const request = require('request');
const {
    formatEngineInfo
} = require('../util/format.js')
const {
    toggleEngine
} = require('../actions/actions.js');


module.exports = function(req, res) {
    toggleEngine(req.params.id, req.body.action)
        .then(info => {
            res.send(formatEngineInfo(info));
        })
        .catch(err => {
            res.status(400).send(err);
        });
}
