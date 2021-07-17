const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    product_id: {
      type: DataTypes.INTEGER,// use the special equalize data types object provide what type of data it is
      allowNull:false, //this is equiv of SQLs NOT NULL option
  },
    tag_id: {
      type: DataTypes.INTEGER,// use the special equalize data types object provide what type of data it is
      allowNull:false, //this is equiv of SQLs NOT NULL option
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
