const express = require("express");
const { newDocHandler,
    getDocHandler,
    updatedDocHandler,
    deleteDocHandler
 } = require("../controller/studentController");
const router = express.Router();


router.get("/", getDocHandler);
router.post("/", newDocHandler);
router.put("/:id",updatedDocHandler);

router.delete("/:id", deleteDocHandler);

module.exports = router;