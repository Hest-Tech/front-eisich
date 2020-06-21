'use strict';
module.exports = (sequelize, DataTypes) => {
    const Filters = sequelize.define('Filters', {
        sort: DataTypes.STRING,
        filters: DataTypes.STRING,
        relatedCategories: DataTypes.STRING,
        sku: DataTypes.STRING
    }, {});
    Filters.associate = function(models) {
        // associations can be defined here
    };
    return Filters;
};