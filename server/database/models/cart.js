'use strict';

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
        pid: DataTypes.INTEGER,
        seller: DataTypes.STRING,
        description: DataTypes.TEXT,
        quantity: DataTypes.INTEGER,
        imgId: DataTypes.STRING,
        oldPrice: DataTypes.INTEGER,
        newPrice: DataTypes.INTEGER,
        saving: DataTypes.INTEGER,
        subTotal: DataTypes.INTEGER
    }, {});
    
    Cart.associate = function(models) {
        Cart.hasMany(models.Product, {
            foreignKey: 'pid'
        });
    };
    return Cart;
};