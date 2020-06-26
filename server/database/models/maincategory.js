'use strict';

module.exports = (sequelize, DataTypes) => {
    const MainCategory = sequelize.define('MainCategory', {
        sku: DataTypes.STRING,
        name: DataTypes.STRING,
        related: DataTypes.STRING,
        imgId: DataTypes.STRING,
        path: DataTypes.STRING
    }, {});
    MainCategory.associate = function(models) {
        MainCategory.hasMany(models.SubCategory, {
            foreignKey: 'subCategoryId'
        });
    };

    return MainCategory;
};