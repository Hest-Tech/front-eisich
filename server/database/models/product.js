'use strict';

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
        description: DataTypes.TEXT,
        userId: DataTypes.INTEGER,
        price: DataTypes.INTEGER
    }, {});
    Product.associate = function(models) {
        // associations can be defined here
    };

    return Product;
};