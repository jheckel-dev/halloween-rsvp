const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Guest extends Model {}

Guest.init(
  {
    guestid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rsvp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "guest",
  }
);

module.exports = Guest;
