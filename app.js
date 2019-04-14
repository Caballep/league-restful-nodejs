'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./router');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

appRouter(app);

var server = app.listen(3000, function () {
    console.log('App running on localhost:' + server.address().port);
});