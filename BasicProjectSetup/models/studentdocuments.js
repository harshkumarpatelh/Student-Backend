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
    allowNull: false,
    reference:{ model : Students, key:'id' }
  },
  docType: {
    type: DataTypes.INTEGER,
    allowNull: false,
    reference: { model: DocumentTypes, key: 'id' }
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

DocumentTypes.hasMany(StudentDocuments, { foreignKey : "docType" });
StudentDocuments.belongsTo(DocumentTypes, { foreignKey: "docType" });

Students.hasMany(StudentDocuments,{foreignKey:'studentID'});
StudentDocuments.belongsTo(Students, {foreingKey:'studentId'});

module.exports = StudentDocuments;