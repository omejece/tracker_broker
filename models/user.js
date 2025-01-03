'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Admin, {
        foreignKey: "adminId",
        as: "users",
      });

      User.belongsTo(models.Role, {
        foreignKey: "roleId",
        as: "role",
      });

      User.hasMany(models.RolePerm, {
        foreignKey: 'userId',
        as: 'roleperms'
      });

      User.hasMany(models.Folder, {
        foreignKey: 'userId',
        as: 'folders'
      });
    }
  }
  User.init({
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyName: DataTypes.STRING,
    fatherId: DataTypes.INTEGER,
    adminId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
    eld: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    created: DataTypes.STRING,
    updated: DataTypes.STRING,
    address: DataTypes.TEXT,
    image: DataTypes.STRING,
    lastLoggedIn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users",
  });
  return User;
};