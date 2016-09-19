// This spec tests all of the GM Translator requests and ensures
// that the format still follows an expected structure

// Testing the results here as well as in the smartcar/api/tests
// gives more information on the source of the failure. IF the 
// tests fail on the API service but not the GM service, it means there is 
// a network error connecting to the gm service.

const request = require(`request`);
const { expect } = require(`chai`);
const smartcarExpects = require(`./smartcarExpects.js`);
const {
    port
} = require('../config.js');

/************ GM GET TESTS ***********************/

describe(`GM Get Requests \n-------------------------\n`, () => {
    it(`should properly respond with unfound cars`, (done) => {
        new Promise((resolve, reject) => {
            request({
                url: `http://localhost:${port}/vehicle/1239/`,
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

    it(`should have properly formatted root responses`, (done) => {
        new Promise((resolve, reject) => {
            request({
                url: `http://localhost:${port}/vehicle/1234/`,
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

    it(`should have properly formatted battery responses`, (done) => {
        new Promise((resolve, reject) => {
            request({
                url: `http://localhost:${port}/vehicle/1234/battery`,
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

    it(`should have properly formatted fuel responses`, (done) => {
        new Promise((resolve, reject) => {
            request({
                url: `http://localhost:${port}/vehicle/1234/fuel`,
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
    
    it(`should have properly formatted doors responses`, (done) => {
        new Promise((resolve, reject) => {
            request({
                url: `http://localhost:${port}/vehicle/1234/doors`,
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

/************ GM POST TESTS ***********************/

describe(`GM Post Requests \n-------------------------\n`, () => {
    it(`should have properly formatted engine responses`, (done) => {
        new Promise((resolve, reject) => {
            request({
                url: `http://localhost:${port}/vehicle/1234/engine`,
                method: `POST`,
                body: {
                    action: `START`
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

    it(`should have properly formatted root responses`, (done) => {
        new Promise((resolve, reject) => {
            request({
                url: `http://localhost:${port}/vehicle/1234/engine`,
                method: `POST`,
                body: {
                    action: `STOP`
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
