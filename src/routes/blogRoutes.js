const { Router } = require("express");
const blogController = require("../controllers/blogController.js");

const router = Router();

router.post("/", blogController.createBlog);
router.get("/", blogController.getAllBlog);
router.get("/detail/:id", blogController.getBlogDetail);
router.put("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

module.exports = router;
