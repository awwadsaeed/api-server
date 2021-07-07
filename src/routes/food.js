'use strict';
const express = require('express');
const router = express.Router();
// const foodsModel = require('../models/food');
const Interface = require('../models/data-collection-class');
const foods = new Interface('food');
const validator = require('../middleware/validator');

router.get('/', readHandler);
router.get('/:id', readHandler);
router.post('/', validator, createHandler);
router.put('/:id', validator, updateHandler);
router.delete('/:id', deleteHandler);


async function readHandler(req, res) {
    try {
        const resObj = await foods.read(req.params.id);
        res.json(resObj.rows);
    } catch (e) {
        next(e)
    }

}

async function createHandler(req, res) {
    try {
        const resObj = await foods.create(req.body);
        res.json(resObj.rows[0]);
    } catch (e) {
        next(e);
    }
}

async function updateHandler(req, res) {
    try {
        const resObj = await foods.update(req.params.id, req.body);
        res.json(resObj.rows[0]);
    } catch (e) {
        next(e);
    }
}

async function deleteHandler(req, res) {
    try {
        const resObj = await foods.delete(req.params.id);
        res.json(resObj.rows[0]);
    } catch (e) {
        next(e);
    }
}
module.exports = router;