'use strict';

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        description: DataTypes.STRING,
        path: DataTypes.STRING,
        userId: DataTypes.STRING,
        seller: DataTypes.STRING,
        oldPrice: DataTypes.INTEGER,
        newPrice: DataTypes.INTEGER,
        saving: DataTypes.INTEGER,        
        pieces: DataTypes.INTEGER,        
        details: DataTypes.TEXT,
        mainCategory: DataTypes.STRING,
        subCategory: DataTypes.STRING,
        innerCategory: DataTypes.STRING,
        pid: DataTypes.STRING
    }, {});
    Product.associate = function(models) {
        // associations can be defined here
    };

    return Product;
};