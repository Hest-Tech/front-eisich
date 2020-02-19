"use strict"

const uuidv4 = require("uuid/v4");
const mainCategorySku = require("./mainCategory").sku;

module.exports = {
    data: [{
        description: 'Boxer Shorts-6-pieces',
        path: '/boxer-shorts-6-pieces/',
        // img: '',
        price: 1500,
        userId: 'abc123',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        mainCategory: mainCategorySku.menSku,
        subCategory: '7050e620-a5b4-4b55-8ac2-80daa95cf090',
        innerCategory: '19915c5a-4850-4f84-84a4-dff72be979c0',
        pid: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        description: 'Unicorn Abaya',
        path: '/unicorn-abaya/',
        // img: '',
        price: 1500,
        userId: 'abc123',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        mainCategory: mainCategorySku.womenSku,
        subCategory: '7977d6ec-0d6a-42da-b54e-d705d752e3fe',
        innerCategory: 'bdd9e4c7-4dce-4eaa-bb93-99e7344fd1e4',
        pid: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        description: 'Samsung Galaxy S7 Edge',
        path: '/samsung-galaxy-s7-edge/',
        // img: '',
        price: 21500,
        userId: 'abc123',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        mainCategory: mainCategorySku.mobileSku,
        subCategory: '62e02387-1abf-4472-a9b0-c970bf39c91d',
        innerCategory: '017d9857-2cd1-4d00-9bb3-e99a29f12acc',
        pid: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        description: 'Bluetooth Smart Watch',
        path: '/bluetooth-smart-watch/',
        // img: '',
        price: 1000,
        userId: 'abc123',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        mainCategory: mainCategorySku.mobileSku,
        subCategory: '457fa685-7b39-469d-bcbd-919003b523f1',
        innerCategory: '9064d267-d2ba-46bb-8e55-2a22a54b8faa',
        pid: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        description: 'Apple MacBook Pro',
        path: '/apple-macbook-pro/',
        // img: '',
        price: 240000,
        userId: 'abc123',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        mainCategory: mainCategorySku.officeSku,
        subCategory: '04c6e28b-d741-4642-9e3e-30f428162084',
        innerCategory: 'bf03b958-794e-4461-b708-5659732d6b01',
        pid: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date()
    }]
}