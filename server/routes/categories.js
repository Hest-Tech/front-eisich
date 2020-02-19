const express = require('express');
var sequelize = require('sequelize');

const db = require('../database/models');

const router = express.Router();

router.get('/mainCategories', async (req, res) => {
    try {
        const mainCategories = await db.MainCategory.findAll({
            attributes: ['name', 'sku', 'path']
        });

        return res.json({ data: mainCategories });
    } catch (e) {
        console.log(e);
    }
});

router.get("/subCategories/:name", async (req, res) => {
    try {
        const displayCategories = [];
        const mainCategoryId = await db.MainCategory.findOne({
            attributes: ['id'],
            where: {
                name: req.params.name
            }
        })
        const subCategories = await db.SubCategory.findAll({
            attributes: ['id', 'name', 'sku', 'path'],
            where: {
                mainCategoryId: mainCategoryId.id
            }
        });
        const innerCategoryList = await db.InnerSubCategory.findAll({
            attributes: ['subCategoryId', 'name', 'path', 'sku']
        });
        const subCategoryStr = JSON.stringify(subCategories);
        const parseSubCategory = JSON.parse(subCategoryStr);
        const innerCategoryStr = JSON.stringify(innerCategoryList);
        const parseInnerCategory = JSON.parse(innerCategoryStr);

        parseSubCategory.map(subCategory => {
            let subCategoryId = subCategory.id;

            const filteredList = parseInnerCategory.filter(
                innerCategory => innerCategory.subCategoryId === subCategoryId
            );
            filteredList.map(i => delete i.subCategoryId)

            const subCategoryMatch = {
                name: subCategory.name,
                path: subCategory.path,
                sku: subCategory.sku,
                innerCategory: filteredList
            }

            displayCategories.push(subCategoryMatch);
        });

        return res.json({ data: displayCategories });
    } catch (e) {
        console.log(e);
    }
});

router.get('/products', async (req, res) => {
    try {
        const products = await db.Product.findAll({
                attributes: { exclude: ['id', 'userId', 'createdAt', 'updatedAt'] }
            })

        return res.json({ data: products });
    } catch (e) {
        console.log(e);
    }
});

router.get('/product/:pid', async (req, res) => {
    try {
        const pid = req.params.pid;
        const product = await db.Product.findOne({
                attributes: { exclude: ['id', 'userId', 'createdAt', 'updatedAt'] },
                where: { pid }
            });

        return res.json({ data: product });
    } catch (e) {
        console.log(e);
    }
});

// router.get('/:name', async (req, res) => {
//     try {
//         const products = await db.sequelize.query(`
//           SELECT *
//           FROM "MainCategories"
//           WHERE _search @@ plainto_tsquery('english', :query);
//         `, {
//           // model: 'MainCategory',
//           replacements: { query: `/${req.params.name}/` },
//           type: db.sequelize.QueryTypes.SELECT
//         });

//         return res.json({ data: products });
//     } catch (e) {
//         console.log(e);
//     }
// });


module.exports = router;