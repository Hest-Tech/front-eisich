'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('MainCategories', {
            id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING
            },
            clothesSku: {
                allowNull: true,
                type: Sequelize.UUID
            },
            sku: {
                type: Sequelize.UUID
            },
            path: {
                type: Sequelize.STRING
            },
            related: {
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
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('MainCategories');
    }
};