const express = require("express");
const { getDocumentType, addStudentDocument } = require("../controller/studentDocumentTypeController");
const router = express.Router();


router.get("/getdocumenttype", getDocumentType);
router.post("/addstudentdocument", addStudentDocument);


module.exports = router;