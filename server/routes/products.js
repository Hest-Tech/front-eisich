const express = require('express');
const sequelize = require('sequelize');

const db = require('../database/models');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await db.Product.findAll({
                attributes: { exclude: ['userId', 'createdAt', 'updatedAt'] }
            });

        return res.json({
            data: products
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
