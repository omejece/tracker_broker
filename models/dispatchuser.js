'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DispatchUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DispatchUser.init({
    dispatchAdminId: DataTypes.INTEGER,
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
    image: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    lastLoggedIn: DataTypes.STRING,
    address: DataTypes.TEXT,
    created: DataTypes.STRING,
    updated: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DispatchUser',
    tableName: "dispatchusers",
  });
  return DispatchUser;
};