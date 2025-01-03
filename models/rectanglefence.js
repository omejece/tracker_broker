'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RectangleFence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RectangleFence.init({
    fenceId: DataTypes.INTEGER,
    north: DataTypes.DOUBLE,
    east: DataTypes.DOUBLE,
    south: DataTypes.DOUBLE,
    west: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'RectangleFence',
    tableName: "rectanglefences",
  });
  return RectangleFence;
};