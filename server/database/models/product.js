'use strict';

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        description: DataTypes.STRING,
        path: DataTypes.STRING,
        userId: DataTypes.STRING,
        imgId: DataTypes.STRING,
        label: DataTypes.STRING,
        seller: DataTypes.STRING,
        features: DataTypes.JSON,
        oldPrice: DataTypes.INTEGER,
        newPrice: DataTypes.INTEGER,
        saving: DataTypes.INTEGER,        
        pieces: DataTypes.INTEGER,        
        details: DataTypes.TEXT,
        mainCategory: DataTypes.STRING,
        subCategory: DataTypes.STRING,
        innerCategory: DataTypes.STRING,
        pid: DataTypes.UUID
    }, {});
    Product.associate = function(models) {
        Product.belongsTo(models.Cart);
        Product.belongsTo(models.Wishlist);
        Product.belongsTo(models.Orders);
    };

    return Product;
};
//console.log(Product.getDataValue('features'));