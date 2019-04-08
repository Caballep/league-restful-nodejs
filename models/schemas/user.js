"use strict";

const mongoose = require("mongoose");

const userSchema = mongoose.model("user", new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: String,
    userFirstName: String,
    userLastName: String,
    userAge: Number,
    password: String,
    avatar_url: String,
    about: String,
    userFavoriteChampions: [{type: Schema.Types.ObjectId, ref: "userFavoriteChampions"}]
}));