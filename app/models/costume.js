const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Costume extends Model {}

Costume.init(
  {
    costumeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "guest",
        key: "guestid",
      },
    },
    guest: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    costume: {
      type: DataTypes.STRING,
    },
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
