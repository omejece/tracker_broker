'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Department.belongsTo(models.User);
      
      Department.hasMany(models.Driver, {
        foreignKey: 'departmentId',
        as: 'drivers'
      });
    }
  }
  Department.init({
    userId: DataTypes.INTEGER,
    departmentName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
    tableName: 'departments',
  });
  return Department;
};