'use strict';

const mongoose = require('mongoose');

const abilitySchema = mongoose.model('ability', new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    image_url: String,
    champion: [{type: Schema.Types.ObjectId, ref: 'champion'}]
}));

module.exports = abilitySchema;