'use strict';

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        description: DataTypes.STRING,
        path: DataTypes.STRING,
        userId: DataTypes.STRING,
        details: DataTypes.TEXT,
        price: DataTypes.INTEGER,
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