const { Router } = require("express");
const blogController = require("../controllers/blogController.js");

const router = Router();

router.post("/", blogController.newBlog);
router.get("/", blogController.getBlog);
router.get("/:id", blogController.getBlogDetail);
router.put("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

module.exports = router;
