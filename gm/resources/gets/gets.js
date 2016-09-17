const request = require('request');

module.exports.getVehicleInfo = function(id) {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://gmapi.azurewebsites.net/getVehicleInfoService',
            method: 'POST',
            body: JSON.stringify({
                id: id,
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