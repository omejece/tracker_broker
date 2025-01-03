'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InvoiceItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      InvoiceItem.belongsTo(models.Invoice, {
        foreignKey: 'invoiceNumber',
        as: 'invoiceitems'
      });
    }
  }
  InvoiceItem.init({
    invoiceNumber: DataTypes.STRING,
    description: DataTypes.STRING,
    qty: DataTypes.STRING,
    vatableItem: DataTypes.INTEGER,
    unitAmount: DataTypes.NUMERIC,
    totalAmount: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'InvoiceItem',
    tableName: 'invoiceitems',
  });
  return InvoiceItem;
};