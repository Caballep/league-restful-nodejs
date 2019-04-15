'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('champion', new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    title: String,
    lore: String,
    splash_url: String,
    avatar_url: String,
    banner_url: String,
    abilities: [{type: Schema.Types.ObjectId, ref: 'ability'}],
    skins: [{type: Schema.Types.ObjectId, ref: 'skin'}],
    userFavoriteChampions: [{type: Schema.Types.ObjectId, ref: 'userFavoriteChampions'}]
}));