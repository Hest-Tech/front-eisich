'use strict';

const subCategory = require('./categoryData/subCategory');

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        "SubCategories",
        subCategory.data, {}
    ),
    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('SubCategories', null, {}),
};