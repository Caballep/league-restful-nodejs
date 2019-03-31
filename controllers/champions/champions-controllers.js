var championModel = require();

exports.getChampion = (req, res) => {

    var championModelResult = championModel.getChampion(req.params.id);

    var champion = ({
        name: championModelResult.name,
        title: championModelResult.title,
        description: championModelResult.description,
        abilities: championModelResult.abilities,
        skins: championModelResult.skins,
        commets: championModelResult.commets
    });
}

exports.getChampions = (req, res) => {

    var champions = ({

    })
    res.status(200).send(champions);
}