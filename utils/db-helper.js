"use strict";

const mongoose = require("");
const constants = require("../utils/constants");
const analyticsLogger = require("../utils/analytics-logger");

exports.dbConnection = () => {

    //Remember to switch the following line to the desired enviroment before running
    const databaseEnviroment = constants.database.connectionEnviroments.dev;

    //Next block will select the right connection string based on the previously selected enviroment
    const connectionString;
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
const mongoDB = process.env.MONGODB_URI || connectionString;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const dbConnection = mongoose.connection;

//dbConnection.on("open", analyticsLogger.logDynamicStrings.utils.);
//dbConnection.on("error", analyticsLogger.logDynamicStrings.utils.);

exports.dbConnection;