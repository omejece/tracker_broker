'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DispatchTracking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DispatchTracking.init({
    dispatchUserId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    pickUp: DataTypes.TEXT,
    dropOff: DataTypes.TEXT,
    distance: DataTypes.STRING,
    created: DataTypes.STRING,
    waybillNumber: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DispatchTracking',
    tableName: "dispatchtrackings",
  });
  return DispatchTracking;
};