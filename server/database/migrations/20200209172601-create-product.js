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
            imgId: {
                type: Sequelize.STRING
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
            oldPrice: {
                type: Sequelize.INTEGER
            },
            newPrice: {
                type: Sequelize.INTEGER
            },
            pieces: {
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            saving: {
                type: Sequelize.INTEGER
            },
            seller: {
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
            sellerId: {
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
        return queryInterface.dropTable('Products');
    }
};