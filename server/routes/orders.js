const express = require('express');
const sequelize = require('sequelize');
const { Op } = require('sequelize');
const db = require('../database/models');

const router = express.Router();

// place an order
router.post("/add", async (req, res) => {
	try {
    	const requestedOrders = req.body;
        console.log('-------> ',requestedOrders)
        if (await db.Orders.bulkCreate(requestedOrders)) {
            const orderItems = await db.Orders.findAll({
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
            });

            return res.json({ data: orderItems });
        }

        res.status(400)
	} catch (e) {
		console.log(e);
	}
});

// filter out duplicate orders
router.get("/:orders", async (req, res) => {
    try {
        const ordersList = JSON.parse(req.params.orders);
        const sortedOrders = []
        const allOrders = await db.Orders.findAll({
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
            raw: true
        });
        
        for (const order of ordersList) {
            // fetch sorted orders(no duplicates)
            const currentOrders = await db.Orders.findOne({
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
                where: {
                    [Op.not]: [
                        { sku: order.pid }
                    ]
                },
                raw: true
            });
            // fetch product's id & pid
            const product = await db.Product.findOne({
                attributes: [ 'id', 'pid' ],
                where: { pid: order.pid },
                raw: true
            });
            console.log("product: ",product);
            const noCurrentOrders = !allOrders.length && !currentOrders;

            if (noCurrentOrders) {
                order['pid'] = product.id
                order['sku'] = product.pid
                sortedOrders.push(order)
            } else if (!!currentOrders) {
                currentOrders['pid'] = product.id
                currentOrders['sku'] = product.pid
                sortedOrders.push(currentOrders)
            }
        }

        console.log('==> ',sortedOrders)

        return res.json({ data: sortedOrders })
    } catch (e) {
        console.log(e);
    }
})


module.exports = router;

/*
router.get("/add/:pid", async (req, res) => {
    try {
        const pid = req.params.pid;
        const order = req.body;
        const product = await db.Orders.findOne({
            attributes: ['id'],
            where: { pid }
        });

        if (!product && await db.Orders.create({ ...order })) {
            const orderItems = await db.Orders.findAll({
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
            });

            return res.json({ data: orderItems });
        }

        res.status(400)
    } catch (e) {
        console.log(e);
    }
});
*/