'use strict';

const subCategory = require('./data/subCategory');

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        "SubCategories",
        subCategory.data, {}
    ),
    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('SubCategories', null, {}),
};