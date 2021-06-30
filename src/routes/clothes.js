'use strict';
const express = require('express');
const router = express.Router();
const clothesModel = require('../models/clothes');
const Interface = require('../models/data-collection-class');
const clothes = new Interface(clothesModel);
const validator = require('../middleware/validator');
router.get('/', readHandler);
router.get('/:id', readHandler);
router.post('/', validator, createHandler);
router.put('/:id', validator, updateHandler);
router.delete('/:id', deleteHandler);


async function readHandler(req, res) {
    try {
        const resObj = await clothes.read(req.params.id);
        res.json(resObj);
    } catch (e) {
        next(e);
    }
}

async function createHandler(req, res) {
    try {
        const resObj = await clothes.create(req.body);
        res.json(resObj);
    } catch (e) {
        next(e);
    }
}

async function updateHandler(req, res) {
    try {
        const resObj = await clothes.update(req.params.id, req.body);
        res.json(resObj);
    } catch (e) {
        next(e);
    }
}

async function deleteHandler(req, res) {
    try{
        const resObj = await clothes.delete(req.params.id);
        res.json(resObj);
    }catch(e){
        next(e);
    }
}


module.exports = router;