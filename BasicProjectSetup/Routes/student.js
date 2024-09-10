const express = require("express");
const { newStudentHandler,getStudentHandler,updatedStudentHandler } = require("../controller/studentController");
const router = express.Router();


router.get("/", getStudentHandler);
router.post("/signup", newStudentHandler);
router.put("/:id",updatedStudentHandler);

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    console.log("ok");

    res.send({ id: `${id}` });
});

module.exports = router;
