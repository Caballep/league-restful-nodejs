"use strict";

/*
Will send log data to a remote server for analytics
The 'log' variable is a data structure
*/
function sendLog(log) {
    
}

/*
Logs locally and sends the data remotely for analytics
*/
// TODO: change below object to a functional way.
const logger = (log) => ({
    log,
    info() {
        console.info();
        sendLog(this.log);
    },

    debug() {
        console.debug();
        sendLog(this.log);
    },

    error() {
        console.error();
        sendLog(this.log);
    }
});

/*
This will provide all the Strings to use when using logger.
Every js module that has functionality must be listed here.
The hierarchy of this object is by "n-folders/file". Example: utils/db-helper
*/
const logDynamicStrings = {
    utils: {
        dbHelper: {
            connectionUpen(environment, connectionString) {
                console.log('connection opened.');
            },
            connectionError(environment, connectionString) {
                console.log('connection error.');
            } 
        }
    },
    models: {
        abilities: {},
        champion: {},
        user: {}
    },

    controllers: {
        champions_controllers: {}
    }
};

exports.analyticsLogger = {
    logger,
    logDynamicStrings
};