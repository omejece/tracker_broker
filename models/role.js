'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.hasMany(models.User, {
        foreignKey: 'roleId',
        as: 'users'
      });

      Role.belongsToMany(models.Permission, {
        through: 'RolePerm',
        as: 'permissions',
        foreignKey: 'roleId'
      });
    }
  }
  Role.init({
    roleName: DataTypes.STRING,
    roleDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
    tableName: "roles",
  });
  return Role;
};