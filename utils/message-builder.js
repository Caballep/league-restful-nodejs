/*
This constains the necessary functions to build the strings 
to be retrieved in the db-helper file
*/
exports.dbStringResultBuilder = ({
    mongooseConnectionSucceeded = (server) => {
        return 'Connected to ' + server;
    },
    moongoseConnectionFailed = (server) => {
        return 'There was a problem trying to connect to ' + server;
    }
});

/*
This contains the necessary functions to build the strings 
to be retrieved in any data access layer (dal) file.
*/
exports.dalResultStringBuilder = ({
    abilities = ([]),
    champions = ({
        noChampionsFound = () => {
            return 'Currently there are no champions.'
        },
        championNotFound = (championId) => {
            return 'Champion with the Id ' + championId + ' was not found.'
        }
    }),
    skins = ({}),
    users = ({})
});

/*
This is a generic String builder. Is ment to build String
messages for generic errors.
*/
exports.genericFileAndFunctionLog = ({
    fileFunctionError = (errorMessage, fileName, functionName) => {
        return errorMessage + 'Error: ' +  + '';
    }
});