import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    content: "",
  });

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const res = await api.get(`/blogs/${id}`);

      const blog = res.data.blog || res.data.data;

      if (!blog) {
        throw new Error("Blog not found");
      }

      setFormData({
        title: blog.title || "",
        category: blog.category || "",
        image: blog.image || "",
        content: blog.content || "",
      });
    } catch (error) {
      console.error(error);
      alert(
        error?.response?.data?.message ||
          error.message ||
          "Failed to load blog"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);

      const res = await api.put(
        `/blogs/${id}`,
        formData
      );

      if (res.data.success) {
        alert("Blog Updated Successfully");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          error.message ||
          "Failed to update blog"
      );
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading Blog...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Home
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">
          Edit Blog
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block mb-2 font-medium">
              Blog Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Cover Image URL
            </label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="w-full h-64 object-cover rounded-lg"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          )}

          <div>
            <label className="block mb-2 font-medium">
              Content
            </label>

            <textarea
              name="content"
              rows="10"
              value={formData.content}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={updating}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            >
              {updating
                ? "Updating..."
                : "Update Blog"}
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/my-blogs")
              }
              className="bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;