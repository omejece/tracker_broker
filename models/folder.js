'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Folder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Folder.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'folders'
      });
      
      Folder.hasMany(models.Device, {
        foreignKey: 'folderId',
        as: 'devices'
      });
    }
  }
  Folder.init({
    userId: DataTypes.INTEGER,
    folderName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Folder',
    tableName: 'folders',
  });
  return Folder;
};