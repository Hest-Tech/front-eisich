const express = require('express');
const sequelize = require('sequelize');
const db = require('../database/models');

const router = express.Router();


// Fetch from Wishlist
router.get('/', async (req, res) => {
    try {
        const wishlist = await db.Wishlist.findAll({
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
        });

        return res.json({ data: wishlist });
    } catch (e) {
        console.log(e);
    }
});

// Add item to wishlist
router.post('/add/:pid', async (req, res) => {

    try {
        const pid = req.params.pid;
        const wishlist = req.body;
        const product = await db.Wishlist.findOne({
            attributes: ['id'],
            where: { pid }
        });

        if (!product && await db.Cart.create({ ...cart })) {
            const wishlistItems = await db.Wishlist.findAll({
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
            });

            return res.json({ data: wishlistItems });
        }

        res.status(400)
    } catch (e) {
        console.log(e);
    }
});


// delete wishlist item
router.delete('/delete/:pid', async (req, res) => {
    try {
        const pid = req.params.pid;
        const wishlist = await db.Wishlist.destroy({
            where: { pid }
        })

        console.log('wishlist: ',wishlist)
        if (!!wishlist) {

            const wishlistItems = await db.Wishlist.findAll({
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
            });

            return res.json({
                data: wishlistItems
            });
        }

        res.status(400)
    } catch(e) {
        console.log(e);
    }
})


module.exports = router;