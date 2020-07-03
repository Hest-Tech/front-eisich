const express = require('express');
const sequelize = require('sequelize');
const db = require('../database/models');

const router = express.Router();

router.get('/:pid', async (req, res) => {
    try {
    	const pid = req.params.pid;
        const product = await db.Product.findOne({
            attributes: ['id'],
            where: { pid }
        });

        return res.json({ data: product });
    } catch (e) {
        console.log(e);
    }
});

router.get('/', async (req, res) => {
    try {
        const cartItems = await db.Cart.findAll({
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
        });

        return res.json({ data: cartItems });
    } catch (e) {
        console.log(e);
    }
});

router.post('/add/:pid', async (req, res) => {
    try {
        const pid = req.params.pid;
    	const cart = req.body;
        const product = await db.Cart.findOne({
            attributes: ['id'],
            where: { pid }
        });
    	const saveCart = !product ? await db.Cart.create({ ...cart }) : res.status(422);

        return res.json({ data: saveCart });
    } catch (e) {
        console.log(e);
    }
});


module.exports = router;