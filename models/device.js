'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Device.belongsTo(models.Folder, {
        foreignKey: 'folderId',
        as: 'devices'
      });

      Device.hasMany(models.Report, {
        foreignKey: "deviceId",
        as: "reports",
      });

      Device.belongsTo(models.User);
      Device.hasMany(models.Setting);
    }
  }
  Device.init({
    clientId: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    folderId: DataTypes.INTEGER,
    deviceName: DataTypes.STRING,
    lastOnline: DataTypes.DATE,
    phone: DataTypes.STRING,
    imei: DataTypes.STRING,
    password: DataTypes.STRING,
    deviceType: DataTypes.INTEGER,
    ignitionStatus: DataTypes.INTEGER,
    heartbeat: DataTypes.INTEGER,
    expired: DataTypes.INTEGER,
    powerStatus: DataTypes.INTEGER,
    created: DataTypes.DATE,
    updated: DataTypes.DATE,
    timeTaken: DataTypes.TIME,
    dateTaken: DataTypes.DATEONLY,
    expiringDate: DataTypes.STRING,
    activeDate: DataTypes.STRING,
    daysRemaining: DataTypes.STRING,
    fenceId: DataTypes.INTEGER,
    isAssigned: DataTypes.INTEGER,
    fenceType: DataTypes.STRING,
    alarmType: DataTypes.INTEGER,
    fenceName: DataTypes.STRING,
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    meta: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Device',
    tableName: 'devices',
  });
  return Device;
};