"use strict";

<<<<<<< HEAD
var championModel = require("../../models/data-access/champion-dal");
=======
const championModel = require("../../models/champion");
>>>>>>> b8f15ee77a5ad4590e2f36ddbdb57c3fef39d097

exports.getChampion = (req, res) => {

    const championModelResult = championModel.getChampion(req.params.championId);

    const champion = {
        name: championModelResult.name,
        title: championModelResult.title,
        description: championModelResult.description,
        abilities: championModelResult.abilities,
        skins: championModelResult.skins,
        commets: championModelResult.commets
    };
}

exports.getChampions = (req, res) => {

    const champions = {

    }

    res.status(200).send(champions);
}