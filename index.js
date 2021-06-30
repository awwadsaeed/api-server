'use strict';
require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false}).then(()=>{
    server.start(process.env.PORT);
}).catch((e)=>{
    console.error('data base connection error: ',e.message);
})