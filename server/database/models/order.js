'use strict';
module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        pid: DataTypes.STRING,
        name: DataTypes.STRING,
        path: DataTypes.STRING,
        description: DataTypes.TEXT,
        userId: DataTypes.INTEGER,
        imgId: DataTypes.STRING,
        address: DataTypes.JSON,
        price: DataTypes.INTEGER
    }, {});
    Orders.associate = function(models) {
        Orders.hasMany(models.Product, {
            foreignKey: 'pid'
        });
    };
    return Orders;
};