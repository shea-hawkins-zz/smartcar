// This spec tests all of the GM Gets and ensures
// that the format still follows an expected structure

const { expect } = require('chai');

const {
    getVehicleInfo,
    getSecurityStatus,
    getEnergy
} = require('../resources/gets/gets.js');

/************ GET TESTS ***********************/

describe('Getting vehicle details\n-------------------------\n', () => {
    it('should get general vehicle information', (done) => {
        getVehicleInfo('1234')
        .then(res => {
            expect(res.status).to.equal('200');
            expect(res.data).to.have.all.keys(['vin', 'color', 'fourDoorSedan', 'twoDoorCoupe', 'driveTrain']);
           
            // This tests to make sure GM doesn't randomlly change their key format
            expect(res.data.vin).to.have.all.keys(['type', 'value']);
            done();
        })
        .catch(err => {
            done(err);
        });
    });

    it('should get security information', (done) => {
        getSecurityStatus('1234')
        .then(res => {
            expect(res.status).to.equal('200');
            expect(res.data).to.have.all.keys(['doors']);
            expect(res.data.doors.values).to.be.an.array;
            expect(res.data.doors.values[0]).to.have.all.keys(['location', 'locked']);
            done();
        })
        .catch(err => {
            done(err);
        });
    });

     it('should get energy information', (done) => {
        getEnergy('1234')
        .then(res => {
            expect(res.status).to.equal('200');
            expect(res.data).to.have.all.keys(['tankLevel', 'batteryLevel']);
            done();
        })
        .catch(err => {
            done(err);
        });
    });
});
