'use strict';

/*
In which layer of the app the error is beeing triggered
*/
exports.errorLocation = ({
    schemas: 'schemas',
    data_access: 'data-access',
    controllers: 'controllers',
    utils: 'utils'
});

/*
The application eviroments
*/
exports.applicationEnviroment = ({
    dev: 'dev',
    test: 'test',
    prod: 'prod'
});

/*
This is specifically used in the utils/db-helper.js file
Contains and describe String constants related to database
*/
exports.dbConnectionString = ({
    dev: 'mongodb://localhost:27017/league',
    test: '',
    prod: ''
});