'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'SubCategories', {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true,
                },
                sku: {
                    type: Sequelize.UUID
                },
                mainCategoryId: {
                    type: Sequelize.INTEGER
                },
                name: {
                    type: Sequelize.STRING
                },
                path: {
                    type: Sequelize.STRING
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('SubCategories');
    }
};