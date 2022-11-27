const Category = require("./../models/Category.js");

exports.getCategories = async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({ succes: true, data: categories });
};
