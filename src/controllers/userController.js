const User = require("../models/User");

exports.newUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
exports.getUser = async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.find({});
    if (email) {
      const userFilter = user.filter((user) =>
        user.email.toLowerCase().includes(email.toLowerCase())
      );
      if (userFilter.length) {
        return res.status(200).send(userFilter);
      } else {
        res.status(404).send(error.message);
      }
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};
exports.updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.status(200).json("User has been updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.params.id });

    res.status(200).json("User has been deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
exports.getDetail = async (req, res) => {
  const user = await User.findById(req.params.id);

  try {
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
