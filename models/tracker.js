'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tracker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tracker.hasMany(models.Imei, {
        foreignKey: 'trackerId',
        as: 'imeis'
      });
    }
  }
  Tracker.init({
    model: DataTypes.STRING,
    unitAmount: DataTypes.STRING,
    qty: DataTypes.STRING,
    qtySold: DataTypes.STRING,
    created: DataTypes.STRING,
    updated: DataTypes.STRING,
    wareHouseNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tracker',
    tableName: "trackers",
  });
  return Tracker;
};