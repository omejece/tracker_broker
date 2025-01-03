'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NCFDesignation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      NCFDesignation.belongsTo(models.NCFDepartment, {
        foreignKey: 'ncfDepartmentId',
        as: 'ncfDesignations'
      });
    }
  }
  NCFDesignation.init({
    ncfDepartmentId: DataTypes.INTEGER,
    designation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NCFDesignation',
    tableName: 'ncfdesignations',
  });
  return NCFDesignation;
};