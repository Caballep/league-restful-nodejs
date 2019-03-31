var express = require("express");
var bodyParser = require("body-parser");
var router = require("../league-nodejs-service/router");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

var server = app.listen(3000, function () {
    console.log("Hello", server.address().port);
});