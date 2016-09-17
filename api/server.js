// This service defines the hosts consolidated SmartCar endpoint
// of all of SmartCar's supported manufacturerers

const express = require('express');
const router = require('./router.js');

const app = express();

const port = 3000;

app.use(router); 

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Smartcar API is listening on ${port}`);
});
