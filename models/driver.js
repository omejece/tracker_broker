'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Driver.belongsTo(models.Department, {
        foreignKey: 'departmentId',
        as: 'drivers'
      });
    }
  }
  Driver.init({
    userId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER,
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    driverLicense: DataTypes.STRING,
    isOnline: DataTypes.INTEGER,
    isOnATask: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    image: DataTypes.STRING,
    lastLoggedIn: DataTypes.STRING,
    created: DataTypes.STRING,
    updated: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Driver',
    tableName: "drivers",
  });
  return Driver;
};