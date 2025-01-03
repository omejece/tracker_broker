'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Maintenance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Maintenance.belongsTo(models.Device);
    }
  }
  Maintenance.init({
    userId: DataTypes.INTEGER,
    deviceId: DataTypes.INTEGER,
    deviceName: DataTypes.STRING,
    status: DataTypes.INTEGER,
    dueDate: DataTypes.DATE,
    lastMaintained: DataTypes.DATE,
    mileage: DataTypes.DOUBLE,
    maintenanceNo: DataTypes.TEXT,
    assetModel: DataTypes.STRING,
    activities: DataTypes.STRING,
    note: DataTypes.TEXT,
    direction: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE,
    address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Maintenance',
    tableName: 'maintenances',
  });
  return Maintenance;
};