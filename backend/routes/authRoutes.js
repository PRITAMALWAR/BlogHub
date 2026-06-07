











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

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getProfile);

// Google Login
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
    session: false,
    failureRedirect:
      "https://bloghub-1-w50n.onrender.com/login",
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

      const frontendUrl =
        "https://bloghub-1-w50n.onrender.com";

      res.redirect(
        `${frontendUrl}/google-success?token=${token}&user=${encodeURIComponent(
          JSON.stringify(user)
        )}`
      );
    } catch (error) {
      console.error(
        "Google Callback Error:",
        error
      );

      res.redirect(
        "https://bloghub-1-w50n.onrender.com/login"
      );
    }
  }
);

router.get("/login-failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Google authentication failed",
  });
});

module.exports = router;








// const express = require("express");
// const passport = require("passport");
// const jwt = require("jsonwebtoken");

// const {
//   register,
//   login,
//   getProfile,
// } = require("../controllers/authController");

// const { protect } = require("../middleware/authMiddleware");

// const router = express.Router();

// /*
// |--------------------------------------------------------------------------
// | Normal Authentication
// |--------------------------------------------------------------------------
// */

// router.post("/register", register);
// router.post("/login", login);
// router.get("/profile", protect, getProfile);

// /*
// |--------------------------------------------------------------------------
// | Google Authentication
// |--------------------------------------------------------------------------
// */

// // Redirect to Google
// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"],
//   })
// );

// // Google Callback
// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     session: false,
//     failureRedirect:
//       process.env.CLIENT_URL
//         ? `${process.env.CLIENT_URL}/login`
//         : "http://localhost:5173/login",
//   }),
//   async (req, res) => {
//     try {
//       const token = jwt.sign(
//         { id: req.user._id },
//         process.env.JWT_SECRET,
//         { expiresIn: "7d" }
//       );

//       const user = {
//         id: req.user._id,
//         username: req.user.username,
//         email: req.user.email,
//         picture: req.user.picture,
//       };

//       console.log(
//         "CLIENT_URL =>",
//         process.env.CLIENT_URL
//       );

//       res.redirect(
//         `${
//           process.env.CLIENT_URL
//         }/google-success?token=${token}&user=${encodeURIComponent(
//           JSON.stringify(user)
//         )}`
//       );
//     } catch (error) {
//       console.error(
//         "Google Callback Error:",
//         error
//       );

//       res.redirect(
//         `${
//           process.env.CLIENT_URL ||
//           "http://localhost:5173"
//         }/login`
//       );
//     }
//   }
// );

// // Optional Route
// router.get("/login-failed", (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: "Google authentication failed",
//   });
// });

// module.exports = router;