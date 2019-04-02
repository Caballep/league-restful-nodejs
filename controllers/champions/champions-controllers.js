"use strict";

const championModel = require("../../models/champion");

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