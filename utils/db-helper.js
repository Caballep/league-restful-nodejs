'use strict';

const mongoose = require('mongoose');
const constants = require('../utils/constants');
const analyticsLogger = require('../lib/analytics-logger');

exports.dbConnection = () => {

    //Remember to switch the following line to the desired enviroment before running
    const databaseEnviroment = constants.applicationEnviroment.dev;

    //Next block will select the right connection string based on the previously selected enviroment
    var connectionString;
    switch(enviroment) {
        case constants.applicationEnviroment.dev: {
            connectionString = constants.dbConnectionString.dev;
        }

        case constants.applicationEnviroment.test: {
            connectionString = constants.dbConnectionString.test;
        }

        case constants.applicationEnviroment.prod: {
            connectionString = constants.dbConnectionString.prod;
        }
    }
}

//Establishing connection for the development enviroment
let mongoDB = process.env.MONGODB_URI || connectionString;

//TODO: Replace console logs for analytics logs
mongoose.connect(constants.database.connectionString.dev)
    .then(() => 
        analyticsLogger.logger.info(constants.dbStringResultBuilder.mongooseConnectionSucceeded(databaseEnviroment))
    )
    .catch(err => 
        analyticsLogger.logger.error(constants.dbStringResultBuilder.moongoseConnectionFailed(databaseEnviroment))
    );

//No idea what is this for:
mongoose.Promise = global.Promise;

let dbConnection = mongoose.connection;

exports.dbConnection;
