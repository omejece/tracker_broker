'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Manage.init({
    settingName: DataTypes.STRING,
    SettingDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Manage',
  });
  return Manage;
};