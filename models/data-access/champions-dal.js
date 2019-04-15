"use strict";
const championSchema = require("../schemas/champion");

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