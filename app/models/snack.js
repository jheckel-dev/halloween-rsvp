const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Snack extends Model {}

Snack.init(
  {
    snackid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "guest",
        key: "guestid",
      },
    },
    food: {
      type: DataTypes.STRING,
    },
    guest: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "snack",
  }
);

module.exports = Snack;
