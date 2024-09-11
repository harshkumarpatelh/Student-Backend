'use strict';
const { DataTypes } = require("sequelize");
const sequelize = require(".");
const DocumentTypes =  sequelize.define("DocumentTypes",{
  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
  },
  type:{
    type:DataTypes.STRING,
    allowNull:false
  },
  createdAt:{
    type:DataTypes.DATE,
    allowNull:false
  },
  updatedAt:{
    type:DataTypes.DATE,
    allowNull:false
  },
  deletedAt:{
    type:DataTypes.DATE,
  }
},{
  freezeTableName:true,
  paranoid:true,
  modelName:"DocumentTypes"
});

module.exports = DocumentTypes;