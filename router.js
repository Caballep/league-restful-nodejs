var exampleController = require("../league-nodejs-service/controllers/example-controller");

var routes = ({
    rExample: "/example"
});

var appRouter = function (app) {
    app.get("/", (req, res) => {
        res.status(200).send("Welcome to our restful API");
    });

    app.get(routes.rExample, exampleController.getSomething);

    
}

module.exports = appRouter;