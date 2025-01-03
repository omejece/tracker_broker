'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dispatch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dispatch.init({
    dispatchAdminId: DataTypes.INTEGER,
    dispatchUserId: DataTypes.INTEGER,
    driverId: DataTypes.INTEGER,
    vehicleName: DataTypes.STRING,
    driverName: DataTypes.STRING,
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    vehicleType: DataTypes.STRING,
    vehicleColour: DataTypes.STRING,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    pickUp: DataTypes.TEXT,
    dropOff: DataTypes.TEXT,
    distance: DataTypes.STRING,
    costAmount: DataTypes.STRING,
    recieverName: DataTypes.STRING,
    recieverPhone: DataTypes.STRING,
    estimatedTime: DataTypes.STRING,
    reqDate: DataTypes.STRING,
    reqTime: DataTypes.STRING,
    reqNumber: DataTypes.STRING,
    reqStatus: DataTypes.INTEGER,
    accepted: DataTypes.INTEGER,
    completed: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    completedDate: DataTypes.STRING,
    completedTime: DataTypes.STRING,
    assignedDate: DataTypes.STRING,
    assignedTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dispatch',
    tableName: "dispatches",
  });
  return Dispatch;
};