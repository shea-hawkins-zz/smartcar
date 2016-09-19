// This spec tests all of the GM Actions and ensures
// that the format still follows an expected structure

const { expect } = require('chai');

const {
    toggleEngine
} = require('../resources/actions/actions.js');

/************ ACTION TESTS ***********************/

describe('Verify toggling engine\n-------------------------\n', () => {
    it('should turn the engine on', (done) => {
        toggleEngine('1234', 'START')
        .then(res => {
            expect(res.status).to.equal('200');
            expect(res.actionResult).to.have.all.keys('status');
            expect(res.actionResult.status).to.be.oneOf(['EXECUTED', 'FAILED']);
            done();
        })
        .catch(err => {
            done(err);
        });
    });

    it('should turn the engine off', (done) => {
        toggleEngine('1234', 'STOP')
        .then(res => {
            expect(res.status).to.equal('200');
            expect(res.actionResult).to.have.all.keys('status');
            expect(res.actionResult.status).to.be.oneOf(['EXECUTED', 'FAILED']);
            done();
        })
        .catch(err => {
            done(err);
        });
    });
});
