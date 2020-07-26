const express = require('express');
const sequelize = require('sequelize');

const db = require('../database/models');
const router = express.Router();

// fetch all products
router.get('/', async (req, res) => {
    try {
        const products = await db.Product.findAll({
                attributes: [
                    'imgId',
                    'description',
                    'path',
                    'mainCategory',
                    'subCategory',
                    'oldPrice',
                    'newPrice',
                    'label',
                    'pieces',
                    'title',
                    'features',
                    'saving',
                    'seller',
                    'innerCategory',
                    'pid',
                    'details',
                    'sellerId'
                ]
            });

        return res.json({
            data: products
        });
    } catch (e) {
        console.log(e);
    }
});

// fetch product id
router.get('/:pid', async (req, res) => {
    try {
        const pid = req.params.pid;
        const product = await db.Product.findOne({
            attributes: [ 'id', 'pid' ],
            where: { pid }
        });

        return res.json({ data: product });
    } catch (e) {
        console.log(e);
    }
});


module.exports = router;
