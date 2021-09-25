const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Snack extends Model {}

Snack.init(
  {
    food: {
      type: DataTypes.STRING,
    },
    guest: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "guest",
        key: "name",
      },
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
