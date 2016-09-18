const request = require('request');

// Actions as defined by the gm API

module.exports.toggleEngine = function(id, action) {
    let command;
    if (action.toLowerCase() === 'start') {
        command = 'START_VEHICLE';
    } else {
        command = 'STOP_VEHICLE';
    }

    return new Promise((resolve, reject) => {
        request({
            url: 'http://gmapi.azurewebsites.net/actionEngineService',
            method: 'POST',
            body: JSON.stringify({
                id: id,
                command: command,
                responseType: "JSON"
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }, (err, res) => {
            err ? reject(err) : resolve(res);
        })
    })
    .then(res => JSON.parse(res.body))
};
