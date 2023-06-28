const { Router } = require("express");
const typeController = require("../controllers/typeController.js");

const router = Router();

router.post("/", typeController.newType);
router.get("/", typeController.getTypes);
router.get("/:id", typeController.getTypeById);



module.exports = router;
