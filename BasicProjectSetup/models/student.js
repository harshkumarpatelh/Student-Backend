
const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Students = sequelize.define("Students", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    deletedAt: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true,
    paranoid: false,
    modelName: "Students"
});

module.exports = Students;