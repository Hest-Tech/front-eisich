'use strict';
module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        pid: DataTypes.INTEGER,
        imgId: DataTypes.STRING,
        sku: DataTypes.UUID,
        description: DataTypes.TEXT,
        seller: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        oldPrice: DataTypes.INTEGER,
        newPrice: DataTypes.INTEGER,
        saving: DataTypes.INTEGER,
        subTotal: DataTypes.INTEGER,
        address: DataTypes.JSON,
        userID: DataTypes.UUID,
        status: DataTypes.STRING, // pending, processing, complete, cancelled
        delivery: DataTypes.JSON
    }, {});
    Orders.associate = function(models) {
        Orders.hasMany(models.Product, {
            foreignKey: 'pid'
        });
    };
    return Orders;
};