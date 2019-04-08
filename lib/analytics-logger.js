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
exports.logger = (log) => ({
    info = () => {
        console.info();
        sendLog(log);
    },

    debug = () => {
        console.debug();
        sendLog(log);
    },

    error = () => {
        console.error();
        sendLog(log);
    }
});