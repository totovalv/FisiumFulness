const Comment = require("../models/Comment");

exports.newComment = async (req, res) => {
  const comment = new Comment(req.body);
  try {
    await comment.save();
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
exports.getComment = async (req, res) => {
  const { blog_id } = req.query;
  try {
    const comment = await Comment.find({});
    if (blog_id) {
      const commentFilter = comment.filter((comment) =>
      comment.blog_id ===blog_id
      );
      if (commentFilter.length) {
        return res.status(200).send(commentFilter);
      } else {
        res.status(404).send("hola");
      }
    } else {
      res.status(200).send(comment);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};
