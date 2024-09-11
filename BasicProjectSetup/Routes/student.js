const express = require("express");
const { newStudentHandler,
    getStudentHandler,
    updatedStudentHandler,
    deleteStudentHandler
} = require("../controller/studentController");
const router = express.Router();


router.get("/getstudentslisting", getStudentHandler);
router.post("/studentsignup", newStudentHandler);
router.put("/updatestudent/:id", updatedStudentHandler);

router.delete("/deletestudent/:id", deleteStudentHandler);

module.exports = router;
