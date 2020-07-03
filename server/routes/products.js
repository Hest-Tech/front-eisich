const express = require('express');
const sequelize = require('sequelize');

const db = require('../database/models');
const router = express.Router();

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

module.exports = router;
