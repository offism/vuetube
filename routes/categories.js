const express = require("express");

const {
  getCategories,
  createCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("./../controllers/categories");

const router = express.Router();

// all categories
router.route("/").get(getCategories).post(createCategories);

// categories with id
router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
