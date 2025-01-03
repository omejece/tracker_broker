'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeoFenceName extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeoFenceName.init({
    userId: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    fenceName: DataTypes.STRING,
    alarmType: DataTypes.INTEGER,
    fenceType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GeoFenceName',
    tableName: 'geofencenames',
  });
  return GeoFenceName;
};