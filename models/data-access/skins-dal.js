'use strict';
const skinSchema = require('../schemas/skin');

/*
Will retrieve all the skins of an specified champion
*/
exports.getChampionSkins = (championId) => {
    skinSchema.find({}, (err, skinsResult) => {
        let skinMap = {};
        if(skinsResult) {
            skinsResult.forEach((skin)=>{
                skinMap[skin._id] = skin;
            });
        } else if (err) {

        }
        return skinMap;
    }).where('champion._id').equals(championId);
}