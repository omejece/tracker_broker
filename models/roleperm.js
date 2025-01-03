'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolePerm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RolePerm.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'roleperms'
      });
    }
  }
  RolePerm.init({
    referenceId: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
    permId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    permName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RolePerm',
    tableName: "roleperms",
  });
  return RolePerm;
};