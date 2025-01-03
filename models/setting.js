'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Setting.belongsTo(models.User);
      Setting.belongsTo(models.Device);
    }
  }
  Setting.init({
    deviceId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    manageId: DataTypes.INTEGER,
    settingName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Setting',
    tableName: 'settings',
  });
  return Setting;
};