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

router.get("/subCategories/:sku", async (req, res) => {
    try {
    	const query = `SELECT "id" FROM "MainCategories" WHERE MainCategory.sku = ${req.params.sku}`
    	// const mainCategoryId = await db.MainCategory.findAll({
    	// 	attributes: ['id'],
    	// 	where: {
    	// 		sku: req.params.sku
    	// 	}
    	// })
    	const mainCategoryId = sequelize.query(query);
        const subCategories = await db.SubCategory.findAll({
            attributes: ['name', 'sku', 'path'],
            where: {
                mainCategoryId: mainCategoryId.id
            }
        });

        return res.json({ data: mainCategories });
    } catch (e) {
        console.log(e);
    }
});


// router.get('/innerCategories', async (req, res) => {
// 	try {
// 	    const mainCategories = await SubCategories.findAll();

// 	    return res.json({ data: mainCategories });
// 	} catch(e) {
// 		console.log(e);
// 	}
// });

// router.get('/:category', async (req, res) => {
// 	try {
// 		let category = req.params.category
// 	    const categories = await Categories.findOne({ where: { name: category } });
// 	    return res.json({ data: categories });
// 	} catch(e) {
// 		console.log(e);
// 	}
// });

module.exports = router;