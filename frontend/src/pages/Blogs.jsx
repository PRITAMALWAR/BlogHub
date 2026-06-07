import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await api.get("/blogs");

      setBlogs(
        res.data.blogs ||
        res.data.data ||
        []
      );
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-xl">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        All Blogs
      </h1>

      {blogs.length === 0 ? (
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-2xl font-semibold">
            No Blogs Found
          </h2>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              )}

              <div className="p-5">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {blog.category || "General"}
                </span>

                <h2 className="text-xl font-bold mt-4">
                  {blog.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  By{" "}
                  {blog.author?.username ||
                    blog.author?.name ||
                    "Unknown Author"}
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  {blog.createdAt
                    ? new Date(
                        blog.createdAt
                      ).toLocaleDateString()
                    : "No Date"}
                </p>

                <p className="text-gray-600 mt-3 line-clamp-3">
                  {blog.content}
                </p>

                <Link
                  to={`/blog/${blog._id}`}
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;