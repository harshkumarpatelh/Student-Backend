const sequelize = require(".");
const {Datatypes} = require("sequelize");

const DOC = sequelize.define("Documents", {
    id:{
        allowNull:false,
        autoIncrement: true,
        primaryKey:true,
        type:Datatypes.INTEGER

    },
    addhar:{
        type:Datatypes.STRING,
        allowNull:false
    },
    pan:{
        type:Datatypes.STRING,
        allowNUll:false
    },
    createdAt:{
        type:Datatypes.DATE,
        allowNUll:false
    },
    updatedAt:{
        type:Datatypes.DATE,
        allowNUll:false
    },
    deletedAt:{
        type:Datatypes.DATE
    }
},{
    freezeTableName : true,
    paranoid:true,
    modelName:"Documents"
});
 


module.exports = DOC;