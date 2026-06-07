const express = require("express");

const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  getMyBlogs,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

router.get("/", getAllBlogs);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

router.get("/my-blogs", protect, getMyBlogs);

router.post("/create", protect, createBlog);

router.put("/:id", protect, updateBlog);

router.delete("/:id", protect, deleteBlog);

/*
|--------------------------------------------------------------------------
| Single Blog Route (LAST)
|--------------------------------------------------------------------------
*/

router.get("/:id", getSingleBlog);

module.exports = router;