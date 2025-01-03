'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Note.init({
    driverId: DataTypes.INTEGER,
    driverName: DataTypes.STRING,
    noteTitle: DataTypes.STRING,
    eventNote: DataTypes.TEXT,
    created: DataTypes.STRING,
    updated: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Note',
    tableName: "notes",
  });
  return Note;
};