'use strict';
const express = require('express');
const cors = require('cors');
const clothesRoute = require('./routes/clothes');
const foodsRoute = require('./routes/food');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const app=express();


app.use(express.json());
app.use(cors());
app.use('/api/v1/clothes',clothesRoute);
app.use('/api/v1/food',foodsRoute);



app.use('*',notFoundHandler);
app.use(errorHandler);


function start(port){
    app.listen(port,()=>{
        console.log(`listning on port ${port}`);
    })
}

module.exports={
    app,start
}