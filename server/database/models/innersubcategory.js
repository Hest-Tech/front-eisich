'use strict';

module.exports = (sequelize, DataTypes) => {
    const InnerSubCategory = sequelize.define('InnerSubCategory', {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
        sort: DataTypes.STRING,
        filters: DataTypes.STRING,
        sku: DataTypes.UUID,
    }, {});
    InnerSubCategory.associate = function(models) {
        
        InnerSubCategory.belongsTo(models.SubCategory);
    }

    return InnerSubCategory;
};