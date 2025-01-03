'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Admin.hasMany(models.User, {
        foreignKey: "adminId",
        as: "users",
      });

      // Admin.hasMany(models.Invoice, {
      //   foreignKey: 'adminId',
      //   as: 'invoices'
      // });
    }
  }
  Admin.init({
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adminType: DataTypes.INTEGER,
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
    gender: DataTypes.INTEGER,
    image: DataTypes.STRING,
    lastLoggedIn: DataTypes.STRING,
    isOnline: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    skypeAdd: DataTypes.STRING,
    whatsAppNum: DataTypes.STRING,
    salaryType: DataTypes.STRING,
    salary: DataTypes.STRING,
    overTime: DataTypes.STRING,
    position: DataTypes.STRING,
    department: DataTypes.STRING,
    created: DataTypes.STRING,
    updated: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Admin',
    tableName: "admins",
  });
  return Admin;
};