'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imei extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Imei.belongsTo(models.Tracker, {
        as: 'imeis',
        foreignKey: 'trackerId'
      });
    }
  }
  Imei.init({
    trackerId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    itemId: DataTypes.STRING,
    imeiNumber: DataTypes.STRING,
    trackerModel: DataTypes.STRING,
    created: DataTypes.STRING,
    updated: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Imei',
    tableName: "imeis",
  });
  return Imei;
};