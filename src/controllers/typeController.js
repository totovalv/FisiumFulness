const Type = require("../models/Type");

exports.newType = async (req, res) => {
  const type = new Type(req.body);
  try {
    await type.save();
    res.status(200).send(type);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
exports.getTypes = async (req, res) => {
  const { name } = req.query;
  try {
    const type = await Type.find({});
    if (name) {
      const typeFilter = type.filter((type) =>
      type.name.toLowerCase().includes(name.toLowerCase())
      );
      if (typeFilter.length) {
        return res.status(200).send(typeFilter);
      } else {
        res.status(404).send(error.message);
      }
    } else {
      res.status(200).send(type);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};
exports.getTypeById = async (req, res) => {
  const type = await Type.findById(req.params.id);

  try {
    if (!type) {
      throw new Error("type not found");
    }
    res.status(200).json(type);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
