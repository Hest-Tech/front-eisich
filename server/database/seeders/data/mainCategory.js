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

const clothesFilters = {
    sort: ['brand'],
    sideFilters: ['brand', 'color']
}

const clothesSku = uuidv4();
const data = [{
    sku: sku.menSku,
    name: "Men's Fashion",
    clothesSku,
    path: "/men-fashion/",
    imgId: "Ble0HUf",
    createdAt: new Date(),
    updatedAt: new Date(),
    sort: clothesFilters.sort,
    filters: clothesFilters.sideFilters
}, {
    sku: sku.womenSku,
    name: "Women's Fashion",
    clothesSku,
    path: "/women-fashion/",
    imgId: "9MOsntN",
    createdAt: new Date(),
    updatedAt: new Date(),
    sort: clothesFilters.sort,
    filters: clothesFilters.sideFilters
}, {
    sku: sku.kidsSku,
    name: "Kid's & Babies",
    clothesSku,
    path: "/kids-babies/",
    imgId: "Ol06FB3",
    createdAt: new Date(),
    updatedAt: new Date(),
    sort: clothesFilters.sort,
    filters: clothesFilters.sideFilters
}, {
    sku: sku.mobileSku,
    name: 'Mobile Phones & Accessories',
    related: uuidv4(),
    path: "/mobile-phones-accessories/",
    imgId: "eDyNl5N",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.officeSku,
    name: 'Computer, Office & Security',
    related: uuidv4(),
    path: "/computer-office-security/",
    imgId: "afWxv6J",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.homeSku,
    name: 'Home & Living',
    related: uuidv4(),
    path: "/home-living/",
    imgId: "Y3O5ZMF",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.jewellerySku,
    name: 'Jewellery',
    related: uuidv4(),
    path: "/jewellery/",
    imgId: "0XBLFvO",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.funSku,
    name: 'Fun & Sports',
    related: uuidv4(),
    path: "/fun-sports/",
    imgId: "5v3XACz",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.carsSku,
    name: 'Automobile',
    related: uuidv4(),
    path: "/automobile/",
    imgId: "cCqqhLM",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
    sku: sku.electronicSku,
    name: 'Consumer Electronics',
    related: uuidv4(),
    path: "/consumer-electronics/",
    imgId: "N7cpl57",
    createdAt: new Date(),
    updatedAt: new Date(),
}]



module.exports = {
    sku,
    data
}