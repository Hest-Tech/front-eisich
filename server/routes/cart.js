const express = require('express');
const sequelize = require('sequelize');
const db = require('../database/models');

const router = express.Router();

// fetch product id
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

// fetch cart
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

// Add to cart
router.post('/add/:pid', async (req, res) => {
    try {
        const pid = req.params.pid;
    	const cart = req.body;
        const product = await db.Cart.findOne({
            attributes: ['id'],
            where: { pid }
        });

        if (!product && await db.Cart.create({ ...cart })) {
            const cartItems = await db.Cart.findAll({
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
            });

            return res.json({ data: cartItems });
        }

        res.status(400)
    } catch (e) {
        console.log(e);
    }
});

// update cart
router.patch('/update/:pid', async (req, res) => {
    try {
        const pid = req.params.pid;
        const updates = req.body;
        const cart = await db.Cart.update(updates, {
            where: { pid }
        });

        if (!!cart[0]) {
            const cartItems = await db.Cart.findAll({
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
            });

            return res.json({ data: cartItems });
        }

        res.status(400)
    } catch(e) {
        console.log(e);
    }
})

// delete cart item
router.delete('/delete/:pid', async (req, res) => {
    try {
        const pid = req.params.pid;
        const cart = await db.Cart.destroy({
            where: { pid }
        })

        if (!!cart) {

            const cartItems = await db.Cart.findAll({
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
            });

            return res.json({
                data: cartItems
            });
        }

        res.status(400)
    } catch(e) {
        console.log(e);
    }
})


module.exports = router;