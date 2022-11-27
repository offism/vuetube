const express = require("express");

const categoryController = require("./../controllers/categories");

const router = express.Router();

router
  .route("/")
  .get(categoryController.getCategories)
  .post(categoryController.createCategories);
router
  .route("/:id")
  .get(categoryController.getCategory)
  .put(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);
module.exports = router;
