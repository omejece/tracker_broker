'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Subscription.init({
    userId: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    companyName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    quantity: DataTypes.STRING,
    unitAmount: DataTypes.NUMERIC,
    totalAmount: DataTypes.NUMERIC,
    subscriptionTerm: DataTypes.STRING,
    createdDate: DataTypes.STRING,
    expiringDate: DataTypes.STRING,
    renewedDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subscription',
    tableName: "subscriptions",
  });
  return Subscription;
};