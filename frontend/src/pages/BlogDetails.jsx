import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      const res = await api.get(`/blogs/${id}`);

      setBlog(
        res.data.blog ||
        res.data.data ||
        null
      );
    } catch (error) {
      console.error(error);
      setBlog(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading blog...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-10">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Home
      </button>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[450px] object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}

        <div className="p-8">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {blog.category || "General"}
          </span>

          <h1 className="text-4xl font-bold mt-4">
            {blog.title}
          </h1>

          <div className="mt-6 flex items-center gap-4">
            {blog.author?.picture ? (
              <img
                src={blog.author.picture}
                alt={
                  blog.author?.username ||
                  "Author"
                }
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                {blog.author?.username?.charAt(
                  0
                ) || "U"}
              </div>
            )}

            <div>
              <p className="font-semibold">
                {blog.author?.username ||
                  "Unknown Author"}
              </p>

              <p className="text-sm text-gray-500">
                {blog.createdAt
                  ? new Date(
                      blog.createdAt
                    ).toLocaleDateString()
                  : "No Date"}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-700 leading-8 whitespace-pre-wrap">
              {blog.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;