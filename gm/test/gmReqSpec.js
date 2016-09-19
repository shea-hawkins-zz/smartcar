// This spec tests all of the GM Translator requests and ensures
// that the format still follows an expected structure

// Testing the results here as well as in the smartcar/api/tests
// gives more information on the source of the failure

const request = require('request');
const { expect } = require('chai');
const smartcarExpects = require('./smartcarExpects.js');

/************ API TESTS ***********************/

describe('Get Requests \n-------------------------\n', () => {
    it('should get general vehicle information', (done) => {
        new Promise((resolve, reject) => {
            request({
                url: 'http://localhost/1234/',
                json: true
            }, (err, res) => {
                err ? reject(err) : resolve(res);
            })
        })
        .then(res => {
            // Runs the expectations as defined by the smartcar API
            smartcarExpects.getRoot(res);
            done();
        })
        .catch(err => {
            done(err);
        });
    });

    it('should get battery information', (done) => {
        new Promise((resolve, reject) => {
            request({
                url: 'http://localhost/1234/battery',
                json: true
            }, (err, res) => {
                err ? reject(err) : resolve(res);
            })
        })
        .then(res => {
            // Runs the expectations as defined by the smartcar API
            smartcarExpects.getBattery(res);
            done();
        })
        .catch(err => {
            done(err);
        });
    });

    it('should get fuel information', (done) => {
        new Promise((resolve, reject) => {
            request({
                url: 'http://localhost/1234/fuel',
                json: true
            }, (err, res) => {
                err ? reject(err) : resolve(res);
            })
        })
        .then(res => {
            // Runs the expectations as defined by the smartcar API
            smartcarExpects.getFuel(res);
            done();
        })
        .catch(err => {
            done(err);
        });
    });
    
    it('should get door information', (done) => {
        new Promise((resolve, reject) => {
            request({
                url: 'http://localhost/1234/doors',
                json: true
            }, (err, res) => {
                err ? reject(err) : resolve(res);
            })
        })
        .then(res => {
            // Runs the expectations as defined by the smartcar API
            smartcarExpects.getDoors(res);
            done();
        })
        .catch(err => {
            done(err);
        });
    });
});

/************ API TESTS ***********************/

describe('Post Requests \n-------------------------\n', () => {
    it('should toggle vehicle on', (done) => {
        new Promise((resolve, reject) => {
            request({
                url: 'http://localhost/1234/engine',
                method: 'POST',
                body: {
                    action: 'START'
                },
                json: true
            }, (err, res) => {
                err ? reject(err) : resolve(res);
            })
        })
        .then(res => {
            // Runs the expectations as defined by the smartcar API
            smartcarExpects.toggleEngine(res);
            done();
        })
        .catch(err => {
            done(err);
        });
    });

    it('should toggle vehicle off', (done) => {
        new Promise((resolve, reject) => {
            request({
                url: 'http://localhost/1234/engine',
                method: 'POST',
                body: {
                    action: 'STOP'
                },
                json: true
            }, (err, res) => {
                err ? reject(err) : resolve(res);
            })
        })
        .then(res => {
            // Runs the expectations as defined by the smartcar API
            smartcarExpects.toggleEngine(res);
            done();
        })
        .catch(err => {
            done(err);
        });
    });
});
