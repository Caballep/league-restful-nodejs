'use strict';
const abilitySchema = require('../schemas/ability');

/*
Will retrieve all the abilities of an specified champion
UI target: Ability details screen
*/
exports.getChampionAbilities = (championId) => {
    abilitySchema.find({}, (err, championsResult) => {
        let championMap = {};
        if(championsResult) {
            championsResult.forEach((champion) => {
                championMap[champion._id] = champion;
            });
        } else if (err) {
            
        }
        return championMap;
    }).where('champion._id').equals(championId);
}

/*
Will retrieve the details of a champion's ability
UI target: Ability details screen
*/
exports.getAbilityDetails = (abilityId) => {

    abilitySchema.findById(abilityId)
    .then((abilityDetails) => {
        if(abilityDetails){
            return abilityDetails;
        }else {
            
        }
    }).catch((err) => {
        
    });
}