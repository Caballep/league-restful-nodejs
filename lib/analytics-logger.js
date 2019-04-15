'use strict';

/*
Will send log data to a remote server for analytics
The 'log' variable is a data structure
*/
sendLog = (log) => {
    
}

/*
Logs locally and sends the data remotely for analytics
*/
exports.logger = ({
    info = (log) => {
        console.info(log);
        sendLog(log);
    },

    debug = (log) => {
        console.debug(log);
        sendLog(log);
    },

    error = (log) => {
        console.error(log);
        sendLog(log);
    }
});