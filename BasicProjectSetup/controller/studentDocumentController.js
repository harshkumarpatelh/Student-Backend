const DocumentTypes = require("../models/documenttypes");
const newDocHandler =(req, res, next)=>{
    try{
        const addDocs = DocumentTypes.create({
            
        });

        
    }
    catch(err){
        next(err);
    }

}
 
const getDocHandler =(req, res, next)=>{
    
}

const updatedDocHandler =(req, res, next)=>{
    
}

const deleteDocHandler =(req, res, next)=>{
    
}




module.exports = {
    newDocHandler,
    getDocHandler,
    updatedDocHandler,
    deleteDocHandler
}