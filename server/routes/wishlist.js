const express = require('express');
const sequelize = require('sequelize');
const db = require('../database/models');

const router = express.Router();


// Fetch from Wishlist
router.get('/:userID', async (req, res) => {
    try {
        const userID = req.params.userID
        const wishlist = await db.Wishlist.findAll({
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
            where: { userID }
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
        console.log(!!product && 'Duplicate data found')

        if (!product && await db.Wishlist.create({ ...wishlist })) {
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
router.delete('/delete/:pid/:userID', async (req, res) => {
    try {
        const pid = req.params.pid;
        const userID = req.params.userID;
        const wishlist = await db.Wishlist.destroy({
            where: { pid, userID }
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