'use-strcit';

const mongoose = require('mongoose');

const userFavoriteChampions = mongoose.model('userFavoriteChampions', new mongoose.Schema({
    user: [{type: Schema.Types.ObjectId, ref: 'user'}],
    champion: [{type: Schema.Types.ObjectId, ref: 'champion'}]
}));