"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema ({
    _id: Schema.Types.ObjectId,
    user_name:String,
    password:String,
    avatar_url:String,
    abilities: [{type: Schema.Types.ObjectId, ref: "ability"}],
    skins: [{type: Schema.Types.ObjectId, ref: "skin"}]
});