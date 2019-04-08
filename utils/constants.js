'use strict';

exports.database = ({
    connectionStrings: ({
        dev: "",
        test: "",
        prod: ""
    }),
    
    connectionEnviroments: ({
        dev: "dev",
        test: "test",
        prod: "prod"
    })
});

/*
This application will only manage english strings, it is not an user interactive app. All 
the strings are just for logs.
*/
exports.stringsBuilder_en = ({
    mongooseConnectionSucceeded = (params) => {
        return "Connected to " + params.server;
    },
    moongoseConnectionFailed = (params) => {
        return "There was a problem trying to connect to " + params.server;
    }
});