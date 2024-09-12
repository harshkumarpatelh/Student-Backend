const express = require("express");
const { getDocumentType, 
    addStudentDocument ,
    getDocumentByStudentId
} = require("../controller/studentDocumentTypeController");
const { route } = require("./student");
const router = express.Router();


router.get("/getdocumenttype", getDocumentType);
router.post("/addstudentdocument", addStudentDocument);
router.get("/getdocumentbystudentid/:stuId",getDocumentByStudentId);


module.exports = router;