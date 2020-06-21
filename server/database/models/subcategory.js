'use strict';

module.exports = (sequelize, DataTypes) => {
    const SubCategory = sequelize.define('SubCategory', {
        sku: DataTypes.STRING,
        name: DataTypes.STRING,
        sort: DataTypes.STRING,
        filters: DataTypes.STRING,
        path: DataTypes.STRING
    }, {});
    SubCategory.associate = function(models) {
        SubCategory.hasMany(models.InnerSubCategory, {
            foreignKey: 'innerSubCategoryId'
        });
        SubCategory.belongsTo(models.MainCategory);
    };
    
    return SubCategory;
};

// , {foreignKey: 'id', target_key: 'mainCategoryId'}