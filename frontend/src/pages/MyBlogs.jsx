import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

const MyBlogs = () => {
  const { user } = useAuth();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyBlogs = async () => {
    try {
      const res = await api.get("/blogs/my-blogs");

      setBlogs(res.data.blogs || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/blogs/${id}`);

      setBlogs((prev) =>
        prev.filter((blog) => blog._id !== id)
      );

      alert("Blog deleted successfully");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to delete blog"
      );
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            My Blogs
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome, {user?.username}
          </p>
        </div>

        <Link
          to="/create-blog"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          + Create Blog
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="bg-white shadow rounded-xl p-10 text-center">
          <h2 className="text-2xl font-semibold">
            No Blogs Found
          </h2>

          <p className="text-gray-500 mt-2">
            Create your first blog post.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-5">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {blog.category}
                </span>

                <h2 className="text-xl font-bold mt-4">
                  {blog.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  {new Date(
                    blog.createdAt
                  ).toLocaleDateString()}
                </p>

                <div className="flex gap-3 mt-5">
                  <Link
                    to={`/blog/${blog._id}`}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </Link>

                  <Link
                    to={`/edit-blog/${blog._id}`}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(blog._id)
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlogs;