import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuth();

    return (
        <nav className="bg-white shadow-md border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="h-16 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold text-blue-600"
                    >
                        BlogHub
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-6">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-blue-600"
                                    : "text-gray-700"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/my-blogs"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-blue-600"
                                    : "text-gray-700"
                            }
                        >
                            My Blogs
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-blue-600"
                                    : "text-gray-700"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/create-blog"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-blue-600"
                                    : "text-gray-700"
                            }
                        >
                            Create Blog
                        </NavLink>

                        {isAuthenticated && (
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-semibold text-blue-600"
                                        : "text-gray-700"
                                }
                            >
                                Profile
                            </NavLink>
                        )}

                        <NavLink
                            to="/blogs"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-blue-600"
                                    : "text-gray-700"
                            }
                        >
                            Blogs
                        </NavLink>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        {isAuthenticated ? (
                            <>
                                <span className="hidden md:block text-sm text-gray-600">
                                    Hi, {user?.username}
                                </span>

                                <button
                                    onClick={logout}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;