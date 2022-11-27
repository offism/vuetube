const Category = require("./../models/Category.js");

// @desc  Get categories
// @route GET api/v1/categories
// @access private/admin

exports.getCategories = async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({ succes: true, data: categories });
};

// @desc  Post Create Categories
// @route POST api/v1/categories
// @access private/admin

exports.createCategories = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json({ succes: true, data: category });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc  Get category
// @route GET api/v1/categories/:id
// @access private/admin

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res
        .status(400)
        .json({
          success: false,
          error: `No category with that id of ${req.params.id}`,
        });
    }
    res.status(200).json({ succes: true, data: category });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
