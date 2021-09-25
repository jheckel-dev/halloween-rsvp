const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/config");

class Costume extends Model {}

Costume.init(
  {
    guest: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "guest",
        key: "name",
      },
    },

    costume: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "costume",
  }
);

module.exports = Costume;
