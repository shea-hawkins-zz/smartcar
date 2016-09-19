// These tests are to ensure that errors are properly handled.

const request = require('request');
const { 
    expect,
    assert
} = require('chai');
const {
    port
} = require('../config.js');

/************ API ROUTE TESTS ***********************/

describe('Smartcar API Requests \n-------------------------\n', () => {
    it('should filter routes that don\'t exist', (done) => {
        new Promise((resolve, reject) => {
            request({
                url: `http://localhost:${port}/badRoute/`,
                json: true
            }, (err, res) => {
                err ? reject(err) : resolve(res);
            })
        })
        .then(res => {
            // Runs the expectations as defined by the smartcar API
            expect(res.statusCode).to.equal(400);
            done();
        })
        .catch(err => {
            done(err);
        });
    });

});

/************ VEHICLE ROUTE TESTS ***********************/

describe('Smartcar Vehicle Requests \n-------------------------\n', () => {
    it('should require an id', (done) => {
        new Promise((resolve, reject) => {
            request({
                url: `http://localhost:${port}/vehicle/`,
                json: true
            }, (err, res) => {
                err ? reject(err) : resolve(res);
            })
        })
        .then(res => {
            // Runs the expectations as defined by the smartcar API
            expect(res.statusCode).to.equal(400);
            done();
        })
        .catch(err => {
            done(err);
        });
    });

    it('should filter invalid routes', (done) => {
        new Promise((resolve, reject) => {
            request({
                url: `http://localhost:${port}/vehicle/1234/badRoute`,
                json: true
            }, (err, res) => {
                err ? reject(err) : resolve(res);
            })
        })
        .then(res => {
            // Runs the expectations as defined by the smartcar API
            expect(res.statusCode).to.equal(400);
            done();
        })
        .catch(err => {
            done(err);
        });
    });

    it('should require properly formatted post body', (done) => {
        new Promise((resolve, reject) => {
            request({
                url: `http://localhost:${port}/vehicle/1234/engine`,
                method: 'POST',
                body: {
                    command: 'badCommand'
                },
                json: true
            }, (err, res) => {
                err ? reject(err) : resolve(res);
            })
        })
        .then(res => {
            // Runs the expectations as defined by the smartcar API
            expect(res.statusCode).to.equal(400);
            done();
        })
        .catch(err => {
            done(err);
        });
    });

});