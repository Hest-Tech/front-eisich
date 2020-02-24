"use strict"

const uuidv4 = require("uuid/v4")
const sku = {
    menSku: uuidv4(),
    womenSku: uuidv4(),
    kidsSku: uuidv4(),
    mobileSku: uuidv4(),
    officeSku: uuidv4(),
    homeSku: uuidv4(),
    jewellerySku: uuidv4(),
    funSku: uuidv4(),
    carsSku: uuidv4(),
    electronicSku: uuidv4()
};

module.exports = {
    sku,
	data: [{
            sku: sku.menSku,
            name: "Men's Fashion",
            path: "/men-fashion/",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: sku.womenSku,
            name: "Women's Fashion",
            path: "/women-fashion/",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: sku.kidsSku,
            name: "Kid's & Babies",
            path: "/kids-babies/",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: sku.mobileSku,
            name: 'Mobile Phones & Accessories',
            path: "/mobile-phones-accessories/",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: sku.officeSku,
            name: 'Computer, Office & Security',
            path: "/computer-office-security/",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: sku.homeSku,
            name: 'Home & Living',
            path: "/home-living/",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: sku.jewellerySku,
            name: 'Jewellery',
            path: "/jewellery/",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: sku.funSku,
            name: 'Fun & Sports',
            path: "/fun-sports/",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: sku.carsSku,
            name: 'Automobile',
            path: "/automobile/",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            sku: sku.electronicSku,
            name: 'Consumer Electronics',
            path: "/consumer-electronics/",
            createdAt: new Date(),
            updatedAt: new Date(),
        }]
}