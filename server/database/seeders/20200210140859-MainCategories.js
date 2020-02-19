'use strict';

const mainCategory = require('./data/mainCategory');

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        'MainCategories',
        mainCategory.data, {}
    ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('MainCategories', null, {}),
};