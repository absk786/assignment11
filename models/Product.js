// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,// use the special equalize data types object provide what type of data it is
      allowNull:false, //this is equiv of SQLs NOT NULL option
      primaryKey: true, //instruct that this is primary key
      autoIncrement:true //turn on autoincrement
    },
    product_name: {
      type: DataTypes.STRING,// use the special equalize data types object provide what type of data it is
      allowNull:false, //this is equiv of SQLs NOT NULL option
    },
    price: {
      type: DataTypes.INTEGER,// use the special equalize data types object provide what type of data it is
      allowNull:false, //this is equiv of SQLs NOT NULL option
      validate: {
        isDecimal:true
      }
  },
    stock: {
      type: DataTypes.INTEGER,// use the special equalize data types object provide what type of data it is
      allowNull:false, //this is equiv of SQLs NOT NULL option
      validate: {
        isNumeric:true
      },
      defaultValue:10
  },
    category_id: {
      type: DataTypes.INTEGER,// use the special equalize data types object provide what type of data it is
      references: {
        model: 'category',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
