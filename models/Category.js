const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    title: {
      type: String,
      minlegth: [3, "Title must be 3 characters longer"],
      trim: true,
      unique: true,
      uniqueCaseInsensetive: true,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      minlegth: [3, "Title must be 3 characters longer"],
      required: [true, "Title is required"],
    },
  },
  { timestamps: true }
);

CategorySchema.plugin(uniqueValidator, { message: "{PATH} already exists" });

module.exports = mongoose.model("Category", CategorySchema);
