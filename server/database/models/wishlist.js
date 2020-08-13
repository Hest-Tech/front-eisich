'use strict';

module.exports = (sequelize, DataTypes) => {
    const Wishlist = sequelize.define('Wishlist', {
        pid: DataTypes.INTEGER,
        seller: DataTypes.STRING,
        sku: DataTypes.UUID,
        description: DataTypes.TEXT,
        quantity: DataTypes.INTEGER,
        imgId: DataTypes.STRING,
        oldPrice: DataTypes.INTEGER,
        newPrice: DataTypes.INTEGER,
        saving: DataTypes.INTEGER,
        subTotal: DataTypes.INTEGER
    }, {});

    Wishlist.associate = function(models) {
        Wishlist.hasMany(models.Product, {
            foreignKey: 'productId'
        });
    };

    return Wishlist;
};