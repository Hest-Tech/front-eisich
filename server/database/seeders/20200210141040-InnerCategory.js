'use strict';

const innerCategory = require('./categoryData/innerCategory');

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        "InnerSubCategories",
        innerCategory.data
    ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('InnerSubCategories', null, {}),
};