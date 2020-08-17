const express = require('express');
const sequelize = require('sequelize');
const db = require('../database/models');

const verifyToken = require('../firebase').verifyToken;

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
router.get('/cart/:token', async (req, res) => {
    try {
        const authToken = req.params.token;
        const userID = await verifyToken(authToken);

        const cartItems = await db.Cart.findAll({
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
            where: { userID }
        });

        return res.json({ data: cartItems });
    } catch (e) {
        console.log(e);
    }
});

// clear out cart
router.delete('/clear', async (req, res) => {
    try {
        db.Cart.destroy({ truncate: true })
            .then(response => {
                return res.json({
                    status: 200,
                    msg: "Successfully cleared cart"
                });            
            })
    } catch (e) {
        console.log(e);
    }
});

// Add to cart
router.post('/add/:pid/:token', async (req, res) => {
    try {
        const pid = req.params.pid;
        const authToken = req.params.token;
        const userID = await verifyToken(authToken);
    	const cart = req.body;
        const product = await db.Cart.findOne({
            attributes: ['id'],
            where: {
                pid,
                userID
            }
        });

        if (!product && await db.Cart.create({ ...cart })) {
            const cartItems = await db.Cart.findAll({
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
                where: { userID }
            });

            return res.json({ data: cartItems });
        }

        res.status(400)
    } catch (e) {
        console.log(e);
    }
});

// update cart
router.patch('/update/:pid/:token', async (req, res) => {
    try {
        const pid = req.params.pid;
        const authToken = req.params.token;
        const userID = await verifyToken(authToken);
        const updates = req.body;
        const cart = await db.Cart.update(updates, {
            where: { pid, userID }
        });

        if (!!cart[0]) {
            const cartItems = await db.Cart.findAll({
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
                where: { userID }
            });

            return res.json({ data: cartItems });
        }

        res.status(400)
    } catch(e) {
        console.log(e);
    }
})

// delete cart item
router.delete('/delete/:pid/:token', async (req, res) => {
    try {
        const pid = req.params.pid;
        const authToken = req.params.token;
        const userID = await verifyToken(authToken);

        const cart = await db.Cart.destroy({
            where: { pid, userID }
        })

        if (!!cart) {

            const cartItems = await db.Cart.findAll({
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
                where: { userID }
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