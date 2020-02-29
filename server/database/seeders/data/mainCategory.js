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

const clothesSku = uuidv4();
const data = [{
    sku: sku.menSku,
    name: "Men's Fashion",
    clothesSku,
    path: "/men-fashion/",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.womenSku,
    name: "Women's Fashion",
    clothesSku,
    path: "/women-fashion/",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.kidsSku,
    name: "Kid's & Babies",
    clothesSku,
    path: "/kids-babies/",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.mobileSku,
    name: 'Mobile Phones & Accessories',
    related: uuidv4(),
    path: "/mobile-phones-accessories/",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.officeSku,
    name: 'Computer, Office & Security',
    related: uuidv4(),
    path: "/computer-office-security/",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.homeSku,
    name: 'Home & Living',
    related: uuidv4(),
    path: "/home-living/",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.jewellerySku,
    name: 'Jewellery',
    related: uuidv4(),
    path: "/jewellery/",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.funSku,
    name: 'Fun & Sports',
    related: uuidv4(),
    path: "/fun-sports/",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.carsSku,
    name: 'Automobile',
    related: uuidv4(),
    path: "/automobile/",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.electronicSku,
    name: 'Consumer Electronics',
    related: uuidv4(),
    path: "/consumer-electronics/",
    createdAt: new Date(),
    updatedAt: new Date(),
}]



module.exports = {
    sku,
    data
}