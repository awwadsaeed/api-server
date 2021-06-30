'use strict';
const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
    name: String,
    price: String
})
const clothesModel = mongoose.model('clothe',clothesSchema);

module.exports=clothesModel;