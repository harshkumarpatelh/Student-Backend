'use strict';
const { DataTypes } = require("sequelize");
const sequelize = require(".");
const DocumentTypes = require("./documenttypes");
const Students = require("./student");

const StudentDocuments = sequelize.define("studentDocuments", {
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  studentId: {
    type: DataTypes.INTEGER,
    references: { model: Students, key: 'id' }
  },
  docType: {
    type: DataTypes.INTEGER,
    references: { model: DocumentTypes, key: 'id' }
  },
  documentLink: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  deletedAt: {
    type: DataTypes.DATE
  }
},
  {
    freezeTableName: true,
    paranoid: true,
    modelName: "studentDocuments"
  });

DocumentTypes.hasMany(StudentDocuments, { foreignKey: "docType" });
StudentDocuments.belongsTo(DocumentTypes, { foreignKey: "docType" });

Students.hasMany(StudentDocuments, { foreignKey: 'studentId' });
StudentDocuments.belongsTo(Students, { foreingKey: 'studentId' });

module.exports = StudentDocuments;