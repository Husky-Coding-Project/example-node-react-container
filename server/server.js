const express = require('express');
var cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors())

app.get('/test', (req, res) => {
    res.type('json');
    console.log('Test endpoint hit!');
    res.send({response: 'Hello World!', time: new Date()});
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port: ' + (process.env.PORT || 8000));
});