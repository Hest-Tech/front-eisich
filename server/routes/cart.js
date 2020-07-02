const express = require('express');
const sequelize = require('sequelize');
const db = require('../database/models');

const router = express.Router();

router.get('/:pid', async (req, res) => {
    try {
    	const pid = req.params.pid;
        const cart = await db.Cart.findOne({
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
            where: { pid }
        });

        return res.json({ data: cart });
    } catch (e) {
        console.log(e);
    }
});

router.post('/add', async (req, res) => {
    try {
    	const cart = req.body;
    	const saveCart = await Cart.create(cart);

        return res.json({ data: saveCart });
    } catch (e) {
        console.log(e);
    }
});


module.exports = router;