import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              BlogHub
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              Share your ideas, stories, and knowledge
              with the world.
            </p>
          </div>

          <div className="flex gap-6 text-gray-300">
            <Link
              to="/"
              className="hover:text-blue-400 transition"
            >
              Home
            </Link>

            <Link
              to="/blogs"
              className="hover:text-blue-400 transition"
            >
              Blogs
            </Link>

            <Link
              to="/about"
              className="hover:text-blue-400 transition"
            >
              About
            </Link>

            <Link
              to="/profile"
              className="hover:text-blue-400 transition"
            >
              Profile
            </Link>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} BlogHub. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;