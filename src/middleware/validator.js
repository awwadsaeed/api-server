'use strict';
module.exports=(req,res,next)=>{
    if(!req.body.name||!req.body.price){
        next('name and price properties not provided.');
    }else{
        next();
    }
}