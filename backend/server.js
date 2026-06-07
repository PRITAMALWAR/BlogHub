require("dotenv").config();

const cors = require("cors");
const express = require("express");
const session = require("express-session");

const connectDB = require("./config/db");
const passport = require("./config/passport");

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

connectDB();

/* CORS FIRST */
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );



app.use(
  cors({
    origin: "https://bloghub-1-w50n.onrender.com",
    credentials: true,
  })
);

/* Body Parser */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Session */
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

/* Passport */
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/auth", authRoutes);
app.use("/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server Running...",
  });
});

const PORT = process.env.PORT || 8909;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});