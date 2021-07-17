// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    product_name: {
      type: DataTypes.STRING,// use the special equalize data types object provide what type of data it is
      allowNull:false, //this is equiv of SQLs NOT NULL option
  },
    price: {
      type: DataTypes.INTEGER,// use the special equalize data types object provide what type of data it is
      allowNull:false, //this is equiv of SQLs NOT NULL option
  },
    stock: {
      type: DataTypes.INTEGER,// use the special equalize data types object provide what type of data it is
      allowNull:false, //this is equiv of SQLs NOT NULL option
  },
    category_id: {
      type: DataTypes.INTEGER,// use the special equalize data types object provide what type of data it is
      allowNull:false, //this is equiv of SQLs NOT NULL option
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
