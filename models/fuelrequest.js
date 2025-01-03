'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FuelRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FuelRequest.init({
    vehicleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    driverId: DataTypes.INTEGER,
    driverName: DataTypes.STRING,
    vehicleName: DataTypes.STRING,
    fillingStation: DataTypes.STRING,
    approved: DataTypes.INTEGER,
    approvedBy: DataTypes.STRING,
    oldFuelBalanceLiter: DataTypes.DOUBLE,
    newFuelRequestLiter: DataTypes.DOUBLE,
    requestDate: DataTypes.STRING,
    requestTime: DataTypes.STRING,
    approvedDate: DataTypes.STRING,
    approvedTime: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    log: DataTypes.DOUBLE,
    remarks: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'FuelRequest',
    tableName: 'fuelrequests'
  });
  return FuelRequest;
};