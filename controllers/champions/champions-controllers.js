"use strict";

var championModel = require("../../models/data-access/champion-dal");

exports.getChampion = (req, res) => {

    var championModelResult = championModel.getChampion(req.params.championId);

    var champion = {
        name: championModelResult.name,
        title: championModelResult.title,
        description: championModelResult.description,
        abilities: championModelResult.abilities,
        skins: championModelResult.skins,
        commets: championModelResult.commets
    };
}

exports.getChampions = (req, res) => {

    var champions = {

    }

    res.status(200).send(champions);
}