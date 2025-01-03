'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CircleFence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CircleFence.init({
    fenceId: DataTypes.INTEGER,
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE,
    radius: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'CircleFence',
    tableName: "circlefences",
  });
  return CircleFence;
};