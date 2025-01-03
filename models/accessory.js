'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accessory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Accessory.init({
    accessoryName: DataTypes.STRING,
    qty: DataTypes.STRING,
    unitAmount: DataTypes.STRING,
    qtySold: DataTypes.STRING,
    created: DataTypes.STRING,
    updated: DataTypes.STRING,
    wareHouseNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Accessory',
    tableName: "accessories",
  });
  return Accessory;
};