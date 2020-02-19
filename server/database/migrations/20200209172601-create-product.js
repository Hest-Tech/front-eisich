'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Products', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            description: {
                type: Sequelize.STRING
            },
            path: {
                type: Sequelize.STRING
            },
            mainCategory: {
                type: Sequelize.STRING
            },
            subCategory: {
                type: Sequelize.STRING
            },
            innerCategory: {
                type: Sequelize.STRING
            },
            pid: {
                type: Sequelize.STRING
            },
            details: {
                type: Sequelize.TEXT
            },
            userId: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('Products');
    }
};