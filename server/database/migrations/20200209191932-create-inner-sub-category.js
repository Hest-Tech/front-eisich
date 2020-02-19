'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('InnerSubCategories', {
            id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            path: {
                type: Sequelize.STRING,
            },
            sku: {
                type: Sequelize.UUID
            },
            subCategoryId: {
                type: Sequelize.INTEGER,
                references: { // InnerSubCategories belongsTo SubCategories
                    model: 'SubCategories',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            name: {
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
        return queryInterface.dropTable('InnerSubCategories');
    }
};