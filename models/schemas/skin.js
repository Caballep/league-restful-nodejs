'use strict';
const mongoose = require('mongoose');

module.exports = mongoose.model('skin', new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    splashArtPath: String,
    champion: [{type: Schema.Types.ObjectId, ref: 'champion'}]
}));