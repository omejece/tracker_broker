'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WebsiteSliderImg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WebsiteSliderImg.init({
    imgName: DataTypes.STRING,
    captionTitle: DataTypes.STRING,
    caption: DataTypes.STRING,
    captionUp: DataTypes.STRING,
    moreURL: DataTypes.STRING,
    demoURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WebsiteSliderImg',
    tableName: "websitesliderimgs",
  });
  return WebsiteSliderImg;
};