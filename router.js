"use strict";

const exampleController = require("../league-nodejs-service/controllers/example-controller");
const exampleController = require("../league-nodejs-service/controllers/");

const routes = ({
    rExample: "/example"
});

const appRouter = function (app) {
    app.get("/", (req, res) => {
        res.status(200).send("Welcome to our restful API");
    });

    app.get(routes.rExample, exampleController.getSomething);
}

module.exports = appRouter;