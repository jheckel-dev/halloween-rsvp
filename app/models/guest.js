// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const { Category } = require('.');
// import our database connection from config.js
const sequelize = require('../config/config');

class Guest extends Model {}

// set up fields and rules for Product model
Guest.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    rsvp: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'guest',
  }
);

module.exports = Guest;
