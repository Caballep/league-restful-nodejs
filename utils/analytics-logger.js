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

/*
This will provide all the Strings to use when using logger.
Every js module that has functionality must be listed here.
The jerarqui of this object is by "n-folders/file". Example: utils/db-helper
*/
exports.logDynamicStrings = ({
    utils = {
        db_helper = {
            connectionOpen = (enviroment, connectionString) => {
    
            },
            connectionError = (enviroment, connectionString) => {
                
            }
        }
    },

    models = {
        abilities = {

        },
        champion = {

        },
        user = {

        }
    },

    controllers = {
        champions_controllers = {

        }
    }
});