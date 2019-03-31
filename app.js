"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var appRouter = require("./router");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

appRouter(app);

var server = app.listen(3000, function () {
    console.log("App running on localhost:" + server.address().port);
});