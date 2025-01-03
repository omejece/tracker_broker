'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Permission.belongsToMany(models.Role, {
        through: 'RolePerm',
        as: 'roles',
        foreignKey: 'permId'
      });
    }
  }
  Permission.init({
    permName: DataTypes.STRING,
    permDescription: DataTypes.STRING,
    permCatigory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permission',
    tableName: "permissions",
  });
  return Permission;
};