'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Survey.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    satisified: DataTypes.STRING,
    discribe: DataTypes.STRING,
    responsive: DataTypes.STRING,
    sugestion: DataTypes.STRING,
    likelihood: DataTypes.STRING,
    contribution: DataTypes.STRING,
    created: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Survey',
    tableName: "surveys",
  });
  return Survey;
};