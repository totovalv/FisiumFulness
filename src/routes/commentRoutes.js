const { Router } = require("express");
const commentController = require("../controllers/commentController");

const router = Router();

router.post("/", commentController.newComment);
router.get("/", commentController.getComment);




module.exports = router;
