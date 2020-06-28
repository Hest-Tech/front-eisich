'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('SubCategories', {
                id: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true,
                },
                sku: {
                    type: Sequelize.UUID
                },
                mainCategoryId: {
                    type: Sequelize.INTEGER,
                    references: { // SubCategories belongsTo MainCategories
                        model: 'MainCategories',
                        key: 'id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                sort: {
                    type: Sequelize.ARRAY(Sequelize.TEXT),
                    allowNull: true,
                },
                filters: {
                    type: Sequelize.ARRAY(Sequelize.TEXT),
                    allowNull: true,
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