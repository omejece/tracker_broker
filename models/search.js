'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Search extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Search.init({
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    link: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Search',
    tableName: "searches",
  });
  return Search;
};