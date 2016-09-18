// This service defines the hosts consolidated SmartCar endpoint
// of all of SmartCar's supported manufacturerers

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router.js');

const app = express();

let port;
process.env.HOST_ENV === 'prod' ? port = 80 : port = 3000;

process.env.HOST_ENV === 'prod' ? app.use(morgan('prod')) : app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(router); 

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Smartcar API is listening on ${port}`);
});
