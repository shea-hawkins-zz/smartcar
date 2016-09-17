const express = require('express');
const app = express();

const port = 3000;

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Smartcar API is listening on ${port}`);
});