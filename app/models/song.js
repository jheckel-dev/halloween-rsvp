const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/config");

class Song extends Model {}

Song.init(
  {
    guest: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "guest",
        key: "name",
      },
    },

    title: {
      type: DataTypes.STRING,
    },

    artist: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "song",
  }
);

module.exports = Song;
