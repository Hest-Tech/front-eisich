'use strict';

module.exports = (sequelize, DataTypes) => {
    const Wishlist = sequelize.define('Wishlist', {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
        description: DataTypes.TEXT,
        userId: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
    }, {});

    Wishlist.associate = function(models) {
        // Wishlist.hasMany(models.Product, {
        //     foreignKey: 'productId',
        //     as: 'products',
        //     onDelete: 'CASCADE',
        // });
    };

    return Wishlist;
};