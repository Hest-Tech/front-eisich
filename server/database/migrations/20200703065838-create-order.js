'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Orders', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            pid: {
                type: Sequelize.INTEGER,
                references: { // Cart hasMany Products
                    model: 'Products',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            imgId: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            seller: {
                type: Sequelize.INTEGER
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            oldPrice: {
                type: Sequelize.INTEGER
            },
            newPrice: {
                type: Sequelize.INTEGER
            },
            saving: {
                type: Sequelize.INTEGER
            },
            subTotal: {
                type: Sequelize.INTEGER
            },
            address: {
                type: Sequelize.JSON
            },
            delivery: {
                type: Sequelize.JSON
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
        return queryInterface.dropTable('Orders');
    }
};