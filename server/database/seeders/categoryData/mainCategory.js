"use strict"

const uuidv4 = require("uuid/v4")

module.exports = {
	data: [{
            sku: uuidv4(),
            name: "Men's Fashion",
            path: "men-fashion",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: uuidv4(),
            name: "Women's Fashion",
            path: "women-fashion",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: uuidv4(),
            name: "Kid's & Babies",
            path: "kids-babies",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: uuidv4(),
            name: 'Mobile Phones & Accessories',
            path: "mobile-phonees-accessories",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: uuidv4(),
            name: 'Computer, Office & Security',
            path: "computer-office-security",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: uuidv4(),
            name: 'Home & Living',
            path: "home-living",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: uuidv4(),
            name: 'Jewellery',
            path: "jewellery",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: uuidv4(),
            name: 'Fun & Sports',
            path: "fun-sports",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: uuidv4(),
            name: 'Automobile',
            path: "automobile",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: uuidv4(),
            name: 'Consumer Electronics',
            path: "consumer-electronics",
            createdAt: new Date(),
            updatedAt: new Date(),
        }]
}