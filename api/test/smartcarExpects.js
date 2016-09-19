// The Smartcar response expectations.
// Ideally this would be hosted on the network so that all translation services would receive
// updates on-the-fly and the file wouldn't need to be duplicated.

const { 
    expect,
    assert
} = require('chai');

module.exports.getRoot = function(res) {
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.all.keys(['vin', 'color', 'doorCount', 'driveTrain']);
    expect(res.body.doorCount).to.be.a('number');
};

module.exports.getFuel = function(res) {
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.all.keys(['percent']);
    assert(typeof res.body.percent === 'number' || res.body.percent === null, 'Percent is not a number or null.');
};

// Battery and Fuel are separated in anticipation of API changes between battery information and fuel information.
module.exports.getBattery = function(res) {
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.all.keys(['percent']);    
    assert(typeof res.body.percent === 'number' || res.body.percent === null, 'Percent is not a number or null.')
};

module.exports.getDoors = function(res) {
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.instanceOf(Array);
    expect(res.body[0]).to.have.all.keys(['location', 'locked']);
    expect(res.body[0].location).to.be.oneOf(['frontLeft', 'frontRight', 'backLeft', 'backRight']);
};

module.exports.toggleEngine = function(res) {
    expect(res.statusCode).to.equal(200);
    expect(res.body.status).to.be.oneOf(['success', 'error']);
};

