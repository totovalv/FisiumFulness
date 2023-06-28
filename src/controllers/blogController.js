const Blog = require("../models/Blog");

exports.newBlog = async (req, res) => {
  const blog = new Blog(req.body);
  try {
    await blog.save();
    res.status(200).send(blog);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
exports.getBlog = async (req, res) => {
  const { title } = req.query;
  try {
    const blog = await Blog.find({});
    if (email) {
      const blogFilter = blog.filter((blog) =>
        blog.title.toLowerCase().includes(title.toLowerCase())
      );
      if (blogFilter.length) {
        return res.status(200).send(blogFilter);
      } else {
        res.status(404).send(error.message);
      }
    } else {
      res.status(200).send(blog);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};
exports.updateBlog = async (req, res) => {
  try {
    await Blog.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.status(200).json("Blog has been updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findOneAndRemove({ _id: req.params.id });

    res.status(200).json("Blog has been deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
exports.getBlogDetail = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  try {
    if (!blog) {
      throw new Error("Blog not found");
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
