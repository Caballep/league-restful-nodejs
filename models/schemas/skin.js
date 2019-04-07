"use strict";

const mongoose = require("mongoose");

const abilities = mongoose.model("ability", new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    splashArtPath: String,
    champion: [{type: Schema.Types.ObjectId, ref: "champion"}]
}));