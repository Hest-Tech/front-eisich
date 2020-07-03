const express = require('express');
const sequelize = require('sequelize');
const db = require('../database/models');

const router = express.Router();

router.get('/:pid', async (req, res) => {
    console.log('FETCHING FROM wishlist')
    try {
    	const pid = req.params.pid;
        const wishlist = await db.Wishlist.findOne({
            attributes: ['id'],
            where: { pid }
        });

        return res.json({ data: wishlist });
    } catch (e) {
        console.log(e);
    }
});

router.post('/add', async (req, res) => {
    try {
    	const wishlist = req.body;
    	const saveWishlist = await Wishlist.create(wishlist);

        return res.json({ data: saveWishlist });
    } catch (e) {
        console.log(e);
    }
});


module.exports = router;