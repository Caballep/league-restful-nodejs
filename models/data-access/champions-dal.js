"use strict";
const thisFile = "champions-dal.js";
const championSchema = require("../schemas/champion");
const constants = require("../../utils/constants");
const messageBuilder = require("../../utils/message-builder");
const analyticsLogger = require("../../lib/analytics-logger");

/*
For analytics logger
*/
const thisFile = "champion-dal.js";

/*
Will retrieve all the champions
UI target: Champion list menu
*/
exports.getChampions = () => {
    championSchema.find({}, (err, championsResult) => {
        let championMap = {};
        if(championsResult) {
            championsResult.forEach((champion) => {
                championMap[champion._id] = champion;
            });
        } else if (err) {
            
        }
        return championMap;
    });
}

/*
Will retrieve a specific champion
UI target: Champion detail screen
*/
exports.getChampion = (championId) => {
    championSchema.findById(championId, (err, championResult) => {
        if(err) {
            
        }
        return championResult;;
    });
}