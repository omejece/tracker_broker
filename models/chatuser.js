'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChatUser.init({
    joinId: DataTypes.INTEGER,
    chatUserName: DataTypes.STRING,
    chatUserEmail: DataTypes.STRING,
    adminUserName: DataTypes.STRING,
    terms: DataTypes.STRING,
    roomName: DataTypes.STRING,
    attended: DataTypes.INTEGER,
    joined: DataTypes.INTEGER,
    dateTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ChatUser',
    tableName: "chatusers",
  });
  return ChatUser;
};