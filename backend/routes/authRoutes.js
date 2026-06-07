const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const {
  register,
  login,
  getProfile,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Normal Authentication
|--------------------------------------------------------------------------
*/

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Profile
router.get("/profile", protect, getProfile);

/*
|--------------------------------------------------------------------------
| Google Authentication
|--------------------------------------------------------------------------
*/

// Redirect to Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Google Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/login`,
    session: false,
  }),
  async (req, res) => {
    try {
      const token = jwt.sign(
        { id: req.user._id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      const user = {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email,
        picture: req.user.picture,
      };

      res.redirect(
        `${process.env.CLIENT_URL}/google-success?token=${token}&user=${encodeURIComponent(
          JSON.stringify(user)
        )}`
      );
    } catch (error) {
      console.error("Google Callback Error:", error);

      res.redirect(
        `${process.env.CLIENT_URL}/login`
      );
    }
  }
);

// Optional
router.get("/login-failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Google authentication failed",
  });
});

module.exports = router;