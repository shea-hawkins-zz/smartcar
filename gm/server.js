const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

// The translator service is not exposed to the host machine, and therefore
// no development conflicts with port 80 are possible.
const port = 80;

process.env.HOST_ENV === 'prod' ? app.use(morgan('prod')) : app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(router);

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`GM Translator listening on ${port}`);
});
