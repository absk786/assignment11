const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,// use the special equalize data types object provide what type of data it is
      allowNull:false, //this is equiv of SQLs NOT NULL option
      primaryKey: true, //instruct that this is primary key
      autoIncrement:true //turn on autoincrement
    },
    tag_name: {
      type: DataTypes.STRING,// use the special equalize data types object provide what type of data it is
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
