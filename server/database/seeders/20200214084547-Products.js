'use strict';

const products = require('./data/products');

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        "Products",
        products.data
    ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('products', null, {}),
};