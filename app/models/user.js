const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {
    // stuff
}

User.init(
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            isEmail: true,
        },
    }, // hooks
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
    }
);

module.exports = User;