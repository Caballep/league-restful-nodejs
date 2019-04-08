"use strict";

const mongoose = require("");
const constants = require("../utils/constants");
const analyticsLogger = require("../lib/analytics-logger");

exports.dbConnection = () => {

    //Remember to switch the following line to the desired enviroment before running
    const databaseEnviroment = constants.database.connectionEnviroments.dev;

    //Next block will select the right connection string based on the previously selected enviroment
    var connectionString;
    switch(enviroment) {
        case constants.database.connectionEnviroments.dev: {
            connectionString = constants.connectionStrings.dev;
        }

        case constants.database.connectionEnviroments.test: {
            connectionString = constants.connectionStrings.test;
        }

        case constants.database.connectionEnviroments.prod: {
            connectionString = constants.connectionStrings.prod;
        }
    }
}

//Establishing connection for the development enviroment
let mongoDB = process.env.MONGODB_URI || connectionString;

//TODO: Replace console logs for analytics logs
mongoose.connect('mongodb://localhost/mongo-games')
    .then(() => console.log(constants.stringsBuilder_en.mongooseConnectionSucceeded(databaseEnviroment)))
    .catch(err => console.error(constants.stringsBuilder_en.moongoseConnectionFailed(databaseEnviroment), err));

//No idea what is this for:
mongoose.Promise = global.Promise;

let dbConnection = mongoose.connection;

exports.dbConnection;
