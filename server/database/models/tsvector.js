'use strict';
module.exports = (sequelize, DataTypes) => {
  const TSVector = sequelize.define('TSVector', {
    // search: DataTypes.STRING
  }, {});
  TSVector.associate = function(models) {
    // associations can be defined here
  };
  return TSVector;
};