'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
        description: DataTypes.TEXT,
        userId: DataTypes.INTEGER,
        imgId: DataTypes.STRING,
        price: DataTypes.INTEGER
    }, {});
    Cart.associate = function(models) {
        Cart.hasMany(models.Product, {
            foreignKey: 'pid'
        });
    };
    return Cart;
};