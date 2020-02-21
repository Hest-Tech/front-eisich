"use strict"

const uuidv4 = require("uuid/v4");
const mainCategorySku = require("./mainCategory").sku;
const subCategorySku = require("./subCategory").sku;
const innerCategorySku = require("./innerCategory").sku;

const data = [{
    description: 'Boxer Shorts-6-pieces',
    path: '/boxer-shorts-6-pieces/',
    // img: '',
    oldPrice: 2000,
    newPrice: 1500,
    saving: 500,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    mainCategory: mainCategorySku.menSku,
    subCategory: subCategorySku['1'],
    innerCategory: innerCategorySku['5'],
    pid: uuidv4(),
    seller: "John Doe",
    pieces: 10,
    createdAt: new Date(),
    updatedAt: new Date()
}, {
    description: 'Unicorn Abaya',
    path: '/unicorn-abaya/',
    // img: '',
    oldPrice: 2000,
    newPrice: 1500,
    saving: 500,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    mainCategory: mainCategorySku.womenSku,
    subCategory: subCategorySku['4'],
    innerCategory: innerCategorySku['34'],
    pid: uuidv4(),
    seller: "Jane Doe",
    pieces: 15,
    createdAt: new Date(),
    updatedAt: new Date()
}, {
    description: 'Samsung Galaxy S7 Edge',
    path: '/samsung-galaxy-s7-edge/',
    // img: '',
    oldPrice: 22000,
    newPrice: 21500,
    saving: 500,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    mainCategory: mainCategorySku.mobileSku,
    subCategory: subCategorySku['18'],
    innerCategory: innerCategorySku['61'],
    pid: uuidv4(),
    seller: "John Doe",
    pieces: 20,
    createdAt: new Date(),
    updatedAt: new Date()
}, {
    description: 'Bluetooth Smart Watch',
    path: '/bluetooth-smart-watch/',
    // img: '',
    oldPrice: 1500,
    newPrice: 1000,
    saving: 500,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    mainCategory: mainCategorySku.mobileSku,
    subCategory: subCategorySku['17'],
    innerCategory: innerCategorySku['58'],
    pid: uuidv4(),
    seller: "Jane Doe",
    pieces: 8,
    createdAt: new Date(),
    updatedAt: new Date()
}, {
    description: 'Apple MacBook Pro',
    path: '/apple-macbook-pro/',
    // img: '',
    oldPrice: 239000,
    newPrice: 240000,
    saving: 1000,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    mainCategory: mainCategorySku.officeSku,
    subCategory: subCategorySku['21'],
    innerCategory: innerCategorySku['73'],
    pid: uuidv4(),
    seller: "John Doe",
    pieces: 9,
    createdAt: new Date(),
    updatedAt: new Date()
}];

// console.log(subCategorySku);

module.exports = { data }