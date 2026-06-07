import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import GoogleSuccess from "./pages/GoogleSuccess";
import CreateBlog from "./pages/CreateBlog";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import MyBlogs from "./pages/MyBlogs";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route
          path="/edit-blog/:id"
          element={
            <ProtectedRoute>
              <EditBlog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-blogs"
          element={
            <ProtectedRoute>
              <MyBlogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/google-success"
          element={<GoogleSuccess />}
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route
  path="/create-blog"
  element={
    <ProtectedRoute>
      <CreateBlog />
    </ProtectedRoute>
  }
/>

      <Route
        path="/blog/:id"
        element={<BlogDetails />}
      />



      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">
              404 - Page Not Found
            </h1>
          </div>
        }
      />
    </Routes>
  );
}

export default App;