const mongoose = require("");
const constants = require("../utils/constants");

exports.dbConnection = (enviroment) => {

    var connectionString;
    var nodeJsProcessEnviroment;

    switch(enviroment) {
        case "dev": {
            connectionString = constants.;
        }

        case "test": {
            connectionString = "";   
        }

        case "prod": {
            connectionString = "";
        }
    }
}

//
let devDatabaseUrl = "";

//Establishing connection for the development enviroment
let mongoDB = process.env.MONGODB_URI || dvDbUrl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let dbConnection = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

exports.dbConnection;