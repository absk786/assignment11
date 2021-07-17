const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    catogery_name: {
      type: DataTypes.INTEGER,// use the special equalize data types object provide what type of data it is
      allowNull:false, //this is equiv of SQLs NOT NULL option
      primaryKey: true, //instruct that this is primary key
      autoIncrement:true //turn on autoincrement
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
