const express = require("express");
const { newStudentHandler,
    getStudentHandler,
    updatedStudentHandler,
    deleteStudentHandler
 } = require("../controller/studentController");
const router = express.Router();


router.get("/", getStudentHandler);
router.post("/signup", newStudentHandler);
router.put("/:id",updatedStudentHandler);

router.delete("/:id", deleteStudentHandler);

module.exports = router;
