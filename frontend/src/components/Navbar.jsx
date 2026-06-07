import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">

            <Link
              to="/"
              className="text-2xl font-bold text-blue-600"
            >
              BlogHub
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <NavLink to="/">Home</NavLink>

              <NavLink to="/blogs">
                Blogs
              </NavLink>

              <NavLink to="/about">
                About
              </NavLink>

              <NavLink to="/my-blogs">
                My Blogs
              </NavLink>

              <NavLink to="/create-blog">
                Create Blog
              </NavLink>

              {isAuthenticated && (
                <NavLink to="/profile">
                  Profile
                </NavLink>
              )}
            </div>

            <div className="hidden md:flex items-center gap-3">
              {isAuthenticated ? (
                <>
                  <span className="text-sm text-gray-600">
                    Hi, {user?.username}
                  </span>

                  <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            <button
              className="md:hidden text-3xl"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>

          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold text-blue-600">
            BlogHub
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col p-5 gap-5">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/blogs"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/my-blogs"
            onClick={() => setMenuOpen(false)}
          >
            My Blogs
          </NavLink>

          <NavLink
            to="/create-blog"
            onClick={() => setMenuOpen(false)}
          >
            Create Blog
          </NavLink>

          {isAuthenticated && (
            <NavLink
              to="/profile"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </NavLink>
          )}

          <hr />

          {isAuthenticated ? (
            <>
              <p className="text-gray-500">
                Hi, {user?.username}
              </p>

              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="bg-red-500 text-white py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="border text-center py-2 rounded-lg"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 text-white text-center py-2 rounded-lg"
              >
                Sign Up
              </Link>
            </>
          )}

        </div>
      </div>
    </>
  );
};

export default Navbar;