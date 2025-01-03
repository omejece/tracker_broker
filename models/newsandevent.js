'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsAndEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NewsAndEvent.init({
    title: DataTypes.STRING,
    caption: DataTypes.TEXT,
    event: DataTypes.TEXT,
    eventDate: DataTypes.STRING,
    created: DataTypes.STRING,
    updated: DataTypes.STRING,
    eventImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NewsAndEvent',
    tableName: "newsandevents",
  });
  return NewsAndEvent;
};