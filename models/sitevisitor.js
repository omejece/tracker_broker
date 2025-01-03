'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SiteVisitor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SiteVisitor.init({
    ipAddress: DataTypes.STRING,
    country: DataTypes.STRING,
    continent: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE,
    timeZone: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'SiteVisitor',
    tableName: 'sitevisitors',
  });
  return SiteVisitor;
};