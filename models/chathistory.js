'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChatHistory.init({
    chatUserId: DataTypes.INTEGER,
    from: DataTypes.STRING,
    chatUserName: DataTypes.STRING,
    roomName: DataTypes.STRING,
    message: DataTypes.TEXT,
    messageTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ChatHistory',
    tableName: "chathistories",
  });
  return ChatHistory;
};