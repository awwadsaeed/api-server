'use strict';
const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name:String,
    price:String
});

const foodModel = mongoose.model('food',foodSchema);

module.exports=foodModel;