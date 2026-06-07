import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Home from "./Home";

const CreateBlog = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        image: "",
        content: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await api.post(
                "/blogs/create",
                formData
            );

            if (res.data.success) {
                alert("Blog Created Successfully");

                setFormData({
                    title: "",
                    category: "",
                    image: "",
                    content: "",
                });

                navigate("/my-blogs");
            }
        } catch (error) {
            console.error(error);

            alert(
                error?.response?.data?.message ||
                "Failed to create blog"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto py-8">
            <button
                onClick={() => navigate("/")}
                className="mb-4 bg-gray-600 text-white px-4 py-2 rounded"
            >
                Home
            </button>
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-8">
                    Create New Blog
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {/* Title */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Blog Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            placeholder="Enter blog title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Category
                        </label>

                        <input
                            type="text"
                            name="category"
                            placeholder="Technology, React, Node.js..."
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Cover Image URL
                        </label>

                        <input
                            type="text"
                            name="image"
                            placeholder="https://example.com/image.jpg"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Image Preview */}
                    {formData.image && (
                        <div>
                            <img
                                src={formData.image}
                                alt="Preview"
                                className="w-full h-64 rounded-lg object-cover"
                                onError={(e) => {
                                    e.target.style.display = "none";
                                }}
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Blog Content
                        </label>

                        <textarea
                            name="content"
                            rows="12"
                            placeholder="Write your blog content..."
                            value={formData.content}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
                    >
                        {loading
                            ? "Publishing..."
                            : "Publish Blog"}
                    </button>
                </form>
            </div>

        </div>
    );
};

export default CreateBlog;