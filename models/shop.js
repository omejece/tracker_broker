'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shop.init({
    title: DataTypes.STRING,
    address: DataTypes.TEXT,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    created: DataTypes.STRING,
    updated: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Shop',
    tableName: "shops",
  });
  return Shop;
};