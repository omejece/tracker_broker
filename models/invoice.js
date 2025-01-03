'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Invoice.hasMany(models.InvoiceItem, {
        foreignKey: 'invoiceNumber',
        as: 'invoiceitems'
      });
    }
  }
  Invoice.init({
    userId: DataTypes.INTEGER,
    billerAddress: DataTypes.TEXT,
    billerCity: DataTypes.STRING,
    billerState: DataTypes.STRING,
    billerCountry: DataTypes.STRING,
    billerPhone: DataTypes.STRING,
    billerEmail: DataTypes.STRING,
    biller: DataTypes.STRING,
    billerWebSite: DataTypes.STRING,
    clientPosition: DataTypes.STRING,
    clientCompany: DataTypes.STRING,
    clientAddress: DataTypes.TEXT,
    clientName: DataTypes.STRING,
    clientEmail: DataTypes.STRING,
    clientPhone: DataTypes.STRING,
    clientCity: DataTypes.STRING,
    clientState: DataTypes.STRING,
    clientCountry: DataTypes.STRING,
    invoiceStatus: DataTypes.STRING,
    totalVatAmount: DataTypes.NUMERIC,
    subTotalAmount: DataTypes.NUMERIC,
    groundTotalAmount: DataTypes.NUMERIC,
    tinNumber: DataTypes.STRING,
    paymentTerms: DataTypes.STRING,
    invoiceNumber: DataTypes.STRING,
    lpoNumber: DataTypes.STRING,
    piNumber: DataTypes.STRING,
    paymentDueDate: DataTypes.STRING,
    invoiceDate: DataTypes.STRING,
    preparedByFullName: DataTypes.STRING,
    preparedByEmail: DataTypes.STRING,
    preparedByPhone: DataTypes.STRING,
    preparedBySkype: DataTypes.STRING,
    preparedByWhatsApp: DataTypes.STRING,
    preparedByWebSite: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Invoice',
    tableName: 'invoices',
  });
  return Invoice;
};