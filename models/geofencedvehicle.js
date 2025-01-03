'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeoFencedVehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeoFencedVehicle.init({
    userId: DataTypes.INTEGER,
    vehicleId: DataTypes.INTEGER,
    fenceId: DataTypes.INTEGER,
    deviceId: DataTypes.STRING,
    isAssigned: DataTypes.INTEGER,
    fenceType: DataTypes.STRING,
    alarmType: DataTypes.INTEGER,
    fenceName: DataTypes.STRING,
    vehicleName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GeoFencedVehicle',
    tableName: 'geofencedvehicles',
  });
  return GeoFencedVehicle;
};