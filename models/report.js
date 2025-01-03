'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Report.belongsTo(models.Device, {
        foreignKey: "deviceId",
        as: "reports",
      });
    }
  }
  Report.init({
    deviceId: DataTypes.STRING,
    deviceName: DataTypes.STRING,
    eventType: DataTypes.INTEGER,
    speed: DataTypes.DOUBLE,
    mileage: DataTypes.DOUBLE,
    temp: DataTypes.DOUBLE,
    direction: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE,
    rfid: DataTypes.STRING,
    address: DataTypes.TEXT,
    fuelGage: DataTypes.STRING,
    gsmStatus: DataTypes.INTEGER,
    gpsStatus: DataTypes.INTEGER,
    reportTime: DataTypes.STRING,
    reportDate: DataTypes.STRING,
    ignitionStatus: DataTypes.INTEGER,
    hdop: DataTypes.DOUBLE,
    altitude: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Report',
    tableName: 'reports',
  });
  return Report;
};