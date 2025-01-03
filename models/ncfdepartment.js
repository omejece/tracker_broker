'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NCFDepartment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      NCFDepartment.hasMany(models.NCFDesignation, {
        foreignKey: 'ncfDepartmentId',
        as: 'ncfDesignations'
      });
    }
  }
  NCFDepartment.init({
    departmentName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NCFDepartment',
    tableName: 'ncfdepartments',
  });
  return NCFDepartment;
};