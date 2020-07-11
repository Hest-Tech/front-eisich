'use strict';

module.exports = (sequelize, DataTypes) => {
    const InnerSubCategory = sequelize.define('InnerSubCategory', {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
        title: DataTypes.STRING,
        sku: DataTypes.UUID,
        subCategoryId: DataTypes.INTEGER
    }, {});
    InnerSubCategory.associate = function(models) {
        
        InnerSubCategory.belongsTo(models.SubCategory);
    }

    return InnerSubCategory;
};